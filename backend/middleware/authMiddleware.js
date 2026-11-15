const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    const authorization = req.get("Authorization");
    const tokenMatch =
        typeof authorization === "string" &&
        authorization.match(/^Bearer\s+(.+)$/i);

    if (!tokenMatch) {
        return res.status(401).json({
            success: false,
            message: "Authentication is required to book a service.",
        });
    }

    try {
        const payload = jwt.verify(tokenMatch[1], process.env.JWT_SECRET);
        if (
            !payload ||
            typeof payload !== "object" ||
            typeof payload.id !== "string"
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid authentication token.",
            });
        }

        req.user = { id: payload.id };
        return next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired authentication token.",
        });
    }
};

module.exports = authenticateUser;