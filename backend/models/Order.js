const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        service: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },
        customerName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },
        customerPhone: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500,
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "completed", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
