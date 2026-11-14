const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

const createAuthResponse = (user, token) => ({
    success: true,
    token,
    user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        role: user.role,
    },
});

// Customer Registration
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, password } = req.body || {};

        // Validate required fields
        if (
            [firstName, lastName, phone, email, password].some(
                (value) => typeof value !== "string" || !value.trim(),
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must contain at least 8 characters",
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const normalizedPhone = phone.trim();

        // Check existing email or phone
        const existingUser = await User.findOne({
            $or: [{ email: normalizedEmail }, { phone: normalizedPhone }],
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email or mobile number already registered",
            });
        }

        // Create customer
        const user = await User.create({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            phone: normalizedPhone,
            email: normalizedEmail,
            password,
        });

        // Generate authentication token
        const token = generateToken(user._id);

        return res.status(201).json({
            message: "Registration successful!",
            ...createAuthResponse(user, token),
        });
    } catch (error) {
        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email or mobile number already registered",
            });
        }

        console.error("Registration error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during registration",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { identifier, password } = req.body || {};

        if (
            typeof identifier !== "string" ||
            !identifier.trim() ||
            typeof password !== "string" ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "Email or mobile number and password are required",
            });
        }

        const normalizedIdentifier = identifier.trim();
        const user = await User.findOne({
            $or: [
                { email: normalizedIdentifier.toLowerCase() },
                { phone: normalizedIdentifier },
            ],
        }).select("+password");

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                success: false,
                message: "Invalid email/mobile number or password",
            });
        }

        const token = generateToken(user._id);
        return res.status(200).json(createAuthResponse(user, token));
    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error during login",
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
