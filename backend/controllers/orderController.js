const Order = require("../models/Order");
const User = require("../models/User");

const createOrder = async (req, res) => {
    const { service, customerName, customerPhone, location } = req.body || {};
    const requiredFields = [service, customerName, customerPhone, location];

    if (
        requiredFields.some(
            (value) => typeof value !== "string" || !value.trim(),
        )
    ) {
        return res.status(400).json({
            success: false,
            message: "Service, name, mobile number, and location are required.",
        });
    }

    if (
        customerPhone.trim().length > 20 ||
        !/^[0-9]{10}$/.test(customerPhone.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid 10-digit mobile number.",
        });
    }

    if (
        service.trim().length > 120 ||
        customerName.trim().length > 120 ||
        location.trim().length > 500
    ) {
        return res.status(400).json({
            success: false,
            message: "One or more booking details exceed the allowed length.",
        });
    }

    try {
        const userExists = await User.exists({ _id: req.user.id });
        if (!userExists) {
            return res.status(401).json({
                success: false,
                message: "Your account could not be verified. Please sign in again.",
            });
        }

        const order = await Order.create({
            user: req.user.id,
            service: service.trim(),
            customerName: customerName.trim(),
            customerPhone: customerPhone.trim(),
            location: location.trim(),
        });

        return res.status(201).json({
            success: true,
            message: "Service booking created successfully.",
            order: {
                id: order._id,
                service: order.service,
                status: order.status,
                createdAt: order.createdAt,
            },
        });
    } catch (error) {
        console.error("Order creation error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to create the service booking. Please try again.",
        });
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .select("service customerName customerPhone location status createdAt")
            .lean();

        return res.status(200).json({
            success: true,
            orders: orders.map((order) => ({
                id: order._id,
                service: order.service,
                customerName: order.customerName,
                customerPhone: order.customerPhone,
                location: order.location,
                status: order.status,
                createdAt: order.createdAt,
            })),
        });
    } catch (error) {
        console.error("Order retrieval error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to load your orders. Please try again.",
        });
    }
};

module.exports = { createOrder, getMyOrders };
