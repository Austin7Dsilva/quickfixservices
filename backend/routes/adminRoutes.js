const express = require("express");
const router = express.Router();

const {
    loginAdmin,
    getAllOrders,
    updateOrderStatus,
} = require("../controllers/adminController");
const authenticateAdmin = require("../middleware/adminMiddleware");

router.post("/login", loginAdmin);
router.get("/orders", authenticateAdmin, getAllOrders);
router.patch("/orders/:orderId/status", authenticateAdmin, updateOrderStatus);

module.exports = router;
