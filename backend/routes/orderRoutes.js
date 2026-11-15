const express = require("express");
const router = express.Router();

const { createOrder, getMyOrders } = require("../controllers/orderController");
const authenticateUser = require("../middleware/authMiddleware");

router.get("/", authenticateUser, getMyOrders);
router.post("/", authenticateUser, createOrder);

module.exports = router;
