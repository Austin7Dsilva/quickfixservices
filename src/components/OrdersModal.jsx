import React, { useEffect, useState } from "react";
import { FaTimes, FaClipboardList } from "react-icons/fa";

const ordersApiUrl =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "/api/orders"
        : "https://quickfixservices.onrender.com/api/orders";

export default function OrdersModal({ onClose }) {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const loadOrders = async () => {
            try {
                const token = localStorage.getItem("quickfix_token");
                if (!token) {
                    throw new Error("Please sign in again to view your orders.");
                }

                const response = await fetch(ordersApiUrl, {
                    headers: { Authorization: `Bearer ${token}` },
                    signal: controller.signal,
                });
                const result = await response.json();

                if (!response.ok || !result.success || !Array.isArray(result.orders)) {
                    throw new Error(result.message || "Unable to load your orders.");
                }

                setOrders(result.orders);
            } catch (requestError) {
                if (requestError.name !== "AbortError") {
                    setError(
                        requestError instanceof TypeError
                            ? "Unable to connect to the server. Please try again."
                            : requestError.message,
                    );
                }
            } finally {
                if (!controller.signal.aborted) setIsLoading(false);
            }
        };

        loadOrders();
        return () => controller.abort();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const formatDate = (date) =>
        new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    return (
        <div
            className="orders-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="orders-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="orders-modal-title"
            >
                <header className="orders-modal-header">
                    <div>
                        <span className="orders-modal-eyebrow">
                            QUICK FIX SERVICES
                        </span>
                        <h2 id="orders-modal-title">Your orders</h2>
                    </div>
                    <button
                        type="button"
                        className="orders-modal-close"
                        onClick={onClose}
                        aria-label="Close orders"
                    >
                        <FaTimes />
                    </button>
                </header>

                <div className="orders-modal-content" aria-live="polite">
                    {isLoading ? (
                        <p className="orders-message">Loading your orders...</p>
                    ) : error ? (
                        <p className="orders-message orders-error" role="alert">
                            {error}
                        </p>
                    ) : orders.length === 0 ? (
                        <div className="orders-empty">
                            <FaClipboardList />
                            <h3>No orders yet</h3>
                            <p>Your service bookings will appear here.</p>
                        </div>
                    ) : (
                        <ul className="orders-list">
                            {orders.map((order) => (
                                <li className="orders-card" key={order.id}>
                                    <div className="orders-card-heading">
                                        <h3>{order.service}</h3>
                                        <span
                                            className={`order-status order-status-${order.status}`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                    <p className="orders-card-date">
                                        Booked {formatDate(order.createdAt)}
                                    </p>
                                    <dl className="orders-card-details">
                                        <div>
                                            <dt>Location</dt>
                                            <dd>{order.location}</dd>
                                        </div>
                                        <div>
                                            <dt>Contact</dt>
                                            <dd>
                                                {order.customerName} ·{" "}
                                                {order.customerPhone}
                                            </dd>
                                        </div>
                                    </dl>
                                    <p className="orders-card-reference">
                                        Order #{order.id}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
}
