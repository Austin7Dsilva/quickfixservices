import React, { useEffect, useState } from "react";
import { FaKey, FaTimes } from "react-icons/fa";
import "./AuthModal.css";

const authApiUrl =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "/api/auth"
        : "https://quickfixservices.onrender.com/api/auth";

export default function ChangePasswordModal({ isOpen, onClose }) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape" && !isSubmitting) onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, isSubmitting, onClose]);

    if (!isOpen) return null;

    const handleClose = () => {
        if (isSubmitting) return;
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
        setSuccess("");
        onClose();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("New password and confirmation do not match.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`${authApiUrl}/change-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("quickfix_token") || ""}`,
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Unable to update your password.");
            }

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setSuccess(result.message || "Password updated successfully.");
        } catch (requestError) {
            setError(
                requestError instanceof TypeError
                    ? "Unable to connect to the server. Please try again."
                    : requestError.message,
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="auth-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <section
                className="auth-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="change-password-title"
            >
                <button
                    type="button"
                    className="auth-modal-close"
                    onClick={handleClose}
                    aria-label="Close change password dialog"
                >
                    <FaTimes />
                </button>
                <div className="auth-modal-icon"><FaKey /></div>
                <h2 id="change-password-title">Change password</h2>
                <p className="auth-modal-description">
                    Enter your current password to set a new one.
                </p>
                <form className="auth-modal-form" onSubmit={handleSubmit}>
                    <label>
                        Current password
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(event) => setCurrentPassword(event.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </label>
                    <label>
                        New password
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(event) => setNewPassword(event.target.value)}
                            autoComplete="new-password"
                            minLength={8}
                            maxLength={128}
                            required
                        />
                    </label>
                    <label>
                        Confirm new password
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            autoComplete="new-password"
                            minLength={8}
                            maxLength={128}
                            required
                        />
                    </label>
                    {error && <p className="auth-error" role="alert">{error}</p>}
                    {success && <p className="auth-success" role="status">{success}</p>}
                    <button
                        type="submit"
                        className="auth-submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Updating..." : "Update password"}
                    </button>
                </form>
            </section>
        </div>
    );
}
