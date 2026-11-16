const express = require("express");
const router = express.Router();

const {
    loginAdmin,
    getAllOrders,
    updateOrderStatus,
    getAllCustomers,
    updateCustomerPassword,
} = require("../controllers/adminController");
const authenticateAdmin = require("../middleware/adminMiddleware");

router.post("/login", loginAdmin);
router.get("/orders", authenticateAdmin, getAllOrders);
router.patch("/orders/:orderId/status", authenticateAdmin, updateOrderStatus);
router.get("/customers", authenticateAdmin, getAllCustomers);
router.patch(
    "/customers/:customerId/password",
    authenticateAdmin,
    updateCustomerPassword,
);

module.exports = router;
