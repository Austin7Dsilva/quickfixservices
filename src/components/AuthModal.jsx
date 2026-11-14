import React, { useEffect, useState } from "react";
import { FaTimes, FaUser } from "react-icons/fa";
import "./AuthModal.css";

const authApiUrl = import.meta.env.VITE_AUTH_API_URL || "/api/auth";

export default function AuthModal({ isOpen, user, onClose, onAuthSuccess, onSignOut }) {
    const [mode, setMode] = useState("signin");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const updateForm = (event) => {
        setForm((currentForm) => ({
            ...currentForm,
            [event.target.name]: event.target.value,
        }));
    };

    const handleModeChange = (nextMode) => {
        setMode(nextMode);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (form.password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        setIsSubmitting(true);
        try {
            const endpoint = mode === "signup" ? "register" : "login";
            const body =
                mode === "signup"
                    ? form
                    : { identifier: form.email, password: form.password };
            const response = await fetch(`${authApiUrl}/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Unable to authenticate your account.");
            }
            if (!result.token || !result.user) {
                throw new Error("The server returned an invalid authentication response.");
            }

            onAuthSuccess(result.user, result.token);
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

    const handleSignOut = () => {
        onSignOut();
        setMode("signin");
        setForm({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
        });
    };

    return (
        <div
            className="auth-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="auth-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="auth-modal-title"
            >
                <button
                    type="button"
                    className="auth-modal-close"
                    onClick={onClose}
                    aria-label="Close account dialog"
                >
                    <FaTimes />
                </button>

                {user ? (
                    <div className="auth-account-view">
                        <div className="auth-modal-icon"><FaUser /></div>
                        <h2 id="auth-modal-title">Welcome, {user.firstName}</h2>
                        <p>You are signed in as {user.email}.</p>
                        <button
                            type="button"
                            className="auth-submit-btn"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="auth-modal-icon"><FaUser /></div>
                        <h2 id="auth-modal-title">
                            {mode === "signup" ? "Create your account" : "Welcome back"}
                        </h2>
                        <p className="auth-modal-description">
                            {mode === "signup"
                                ? "Sign up to get started with Quick Fix Services."
                                : "Sign in with your email or mobile number."}
                        </p>

                        <div className="auth-mode-tabs" role="tablist" aria-label="Account action">
                            <button
                                type="button"
                                role="tab"
                                aria-selected={mode === "signin"}
                                className={mode === "signin" ? "active" : ""}
                                onClick={() => handleModeChange("signin")}
                            >
                                Sign in
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected={mode === "signup"}
                                className={mode === "signup" ? "active" : ""}
                                onClick={() => handleModeChange("signup")}
                            >
                                Sign up
                            </button>
                        </div>

                        <form className="auth-modal-form" onSubmit={handleSubmit}>
                            {mode === "signup" && (
                                <>
                                    <div className="auth-name-fields">
                                        <label>
                                            First name
                                            <input
                                                name="firstName"
                                                autoComplete="given-name"
                                                value={form.firstName}
                                                onChange={updateForm}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Last name
                                            <input
                                                name="lastName"
                                                autoComplete="family-name"
                                                value={form.lastName}
                                                onChange={updateForm}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        Mobile number
                                        <input
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            value={form.phone}
                                            onChange={updateForm}
                                            required
                                        />
                                    </label>
                                </>
                            )}
                            <label>
                                {mode === "signup" ? "Email address" : "Email or mobile number"}
                                <input
                                    name="email"
                                    type={mode === "signup" ? "email" : "text"}
                                    autoComplete="username"
                                    value={form.email}
                                    onChange={updateForm}
                                    required
                                />
                            </label>
                            <label>
                                Password
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete={mode === "signup" ? "new-password" : "current-password"}
                                    minLength="8"
                                    value={form.password}
                                    onChange={updateForm}
                                    required
                                />
                            </label>

                            {error && <p className="auth-error" role="alert">{error}</p>}

                            <button
                                type="submit"
                                className="auth-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Please wait..."
                                    : mode === "signup"
                                      ? "Create account"
                                      : "Sign in"}
                            </button>
                        </form>
                    </>
                )}
            </section>
        </div>
    );
}
