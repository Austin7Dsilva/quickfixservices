const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    changePassword,
} = require("../controllers/authController");
const authenticateUser = require("../middleware/authMiddleware");

// POST /api/auth/register
router.post("/register", registerUser);
// POST /api/auth/login
router.post("/login", loginUser);
router.patch("/change-password", authenticateUser, changePassword);

module.exports = router;
