const jwt = require("jsonwebtoken");

const authenticateAdmin = (req, res, next) => {
    const authorization = req.get("Authorization");
    const tokenMatch =
        typeof authorization === "string" &&
        authorization.match(/^Bearer\s+(.+)$/i);

    if (!tokenMatch) {
        return res.status(401).json({
            success: false,
            message: "Admin authentication is required.",
        });
    }

    try {
        const payload = jwt.verify(tokenMatch[1], process.env.JWT_SECRET);
        if (!payload || typeof payload !== "object" || payload.admin !== true) {
            return res.status(403).json({
                success: false,
                message: "Admin access is required.",
            });
        }

        return next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Admin session is invalid or expired. Please sign in again.",
        });
    }
};

module.exports = authenticateAdmin;
