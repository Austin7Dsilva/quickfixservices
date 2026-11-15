const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Order = require("../models/Order");

const orderStatuses = ["pending", "confirmed", "completed", "cancelled"];

const loginAdmin = (req, res) => {
    const { password } = req.body || {};
    const configuredPassword = process.env.ADMIN_PASSWORD;

    if (!configuredPassword || !process.env.JWT_SECRET) {
        return res.status(503).json({
            success: false,
            message: "Admin access is not configured on the server.",
        });
    }

    if (typeof password !== "string") {
        return res.status(400).json({
            success: false,
            message: "Password is required.",
        });
    }

    const suppliedPassword = Buffer.from(password);
    const expectedPassword = Buffer.from(configuredPassword);
    const passwordMatches =
        suppliedPassword.length === expectedPassword.length &&
        crypto.timingSafeEqual(suppliedPassword, expectedPassword);

    if (!passwordMatches) {
        return res.status(401).json({
            success: false,
            message: "Incorrect password.",
        });
    }

    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, {
        expiresIn: "8h",
    });

    return res.status(200).json({ success: true, token });
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .sort({ createdAt: -1 })
            .populate("user", "firstName lastName email phone")
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
                user: order.user
                    ? {
                          name: [order.user.firstName, order.user.lastName]
                              .filter(Boolean)
                              .join(" "),
                          email: order.user.email,
                          phone: order.user.phone,
                      }
                    : null,
            })),
        });
    } catch (error) {
        console.error("Admin order retrieval error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to load orders. Please try again.",
        });
    }
};

const updateOrderStatus = async (req, res) => {
    const { status } = req.body || {};
    if (!orderStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid order status.",
        });
    }

    if (!/^[a-f\d]{24}$/i.test(req.params.orderId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid order ID.",
        });
    }

    try {
        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status },
            { new: true, runValidators: true },
        ).select("_id status");

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found.",
            });
        }

        return res.status(200).json({
            success: true,
            order: { id: order._id, status: order.status },
        });
    } catch (error) {
        console.error("Admin order status update error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to update order status. Please try again.",
        });
    }
};

module.exports = { loginAdmin, getAllOrders, updateOrderStatus };
