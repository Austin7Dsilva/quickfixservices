import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaLock, FaShieldAlt } from "react-icons/fa";
import "./Admin.css";

const adminApiUrl =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "/api/admin"
        : "https://quickfixservices.onrender.com/api/admin";

const statuses = ["pending", "confirmed", "completed", "cancelled"];

export default function Admin({ onExit }) {
    const [password, setPassword] = useState("");
    const [adminToken, setAdminToken] = useState(
        () => sessionStorage.getItem("quickfix_admin_token") || "",
    );
    const [activeSection, setActiveSection] = useState("orders");
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCustomers, setIsLoadingCustomers] = useState(false);
    const [updatingOrderId, setUpdatingOrderId] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [newCustomerPassword, setNewCustomerPassword] = useState("");
    const [isUpdatingCustomerPassword, setIsUpdatingCustomerPassword] =
        useState(false);
    const [customerPasswordError, setCustomerPasswordError] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!adminToken) return undefined;

        const controller = new AbortController();
        const loadOrders = async () => {
            setIsLoading(true);
            setError("");

            try {
                const response = await fetch(`${adminApiUrl}/orders`, {
                    headers: { Authorization: `Bearer ${adminToken}` },
                    signal: controller.signal,
                });
                const result = await response.json();

                if (!response.ok || !result.success || !Array.isArray(result.orders)) {
                    if (response.status === 401 || response.status === 403) {
                        sessionStorage.removeItem("quickfix_admin_token");
                        setAdminToken("");
                    }
                    throw new Error(result.message || "Unable to load orders.");
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
    }, [adminToken]);

    useEffect(() => {
        if (!adminToken || activeSection !== "customers") return undefined;

        const controller = new AbortController();
        const loadCustomers = async () => {
            setIsLoadingCustomers(true);
            setError("");

            try {
                const response = await fetch(`${adminApiUrl}/customers`, {
                    headers: { Authorization: `Bearer ${adminToken}` },
                    signal: controller.signal,
                });
                const result = await response.json();

                if (
                    !response.ok ||
                    !result.success ||
                    !Array.isArray(result.customers)
                ) {
                    if (response.status === 401 || response.status === 403) {
                        sessionStorage.removeItem("quickfix_admin_token");
                        setAdminToken("");
                    }
                    throw new Error(result.message || "Unable to load customers.");
                }

                setCustomers(result.customers);
            } catch (requestError) {
                if (requestError.name !== "AbortError") {
                    setError(
                        requestError instanceof TypeError
                            ? "Unable to connect to the server. Please try again."
                            : requestError.message,
                    );
                }
            } finally {
                if (!controller.signal.aborted) setIsLoadingCustomers(false);
            }
        };

        loadCustomers();
        return () => controller.abort();
    }, [adminToken, activeSection]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setMessage("");

        try {
            const response = await fetch(`${adminApiUrl}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const result = await response.json();

            if (!response.ok || !result.success || !result.token) {
                throw new Error(result.message || "Unable to sign in.");
            }

            sessionStorage.setItem("quickfix_admin_token", result.token);
            setPassword("");
            setAdminToken(result.token);
        } catch (requestError) {
            setError(
                requestError instanceof TypeError
                    ? "Unable to connect to the server. Please try again."
                    : requestError.message,
            );
        }
    };

    const handleStatusChange = async (orderId, status) => {
        setUpdatingOrderId(orderId);
        setError("");
        setMessage("");

        try {
            const response = await fetch(
                `${adminApiUrl}/orders/${orderId}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify({ status }),
                },
            );
            const result = await response.json();

            if (!response.ok || !result.success || !result.order) {
                if (response.status === 401 || response.status === 403) {
                    sessionStorage.removeItem("quickfix_admin_token");
                    setAdminToken("");
                }
                throw new Error(result.message || "Unable to update order.");
            }

            setOrders((currentOrders) =>
                currentOrders.map((order) =>
                    order.id === orderId
                        ? { ...order, status: result.order.status }
                        : order,
                ),
            );
            setMessage(`Order status updated to ${result.order.status}.`);
        } catch (requestError) {
            setError(
                requestError instanceof TypeError
                    ? "Unable to connect to the server. Please try again."
                    : requestError.message,
            );
        } finally {
            setUpdatingOrderId("");
        }
    };

    const handleSignOut = () => {
        sessionStorage.removeItem("quickfix_admin_token");
        setAdminToken("");
        setOrders([]);
        setCustomers([]);
        setSelectedCustomer(null);
        setMessage("");
        setError("");
    };

    const handleCustomerPasswordUpdate = async (event) => {
        event.preventDefault();
        if (!selectedCustomer) return;

        setIsUpdatingCustomerPassword(true);
        setCustomerPasswordError("");
        setError("");
        setMessage("");

        try {
            const response = await fetch(
                `${adminApiUrl}/customers/${selectedCustomer.id}/password`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify({ newPassword: newCustomerPassword }),
                },
            );
            const result = await response.json();

            if (!response.ok || !result.success) {
                if (response.status === 401 || response.status === 403) {
                    sessionStorage.removeItem("quickfix_admin_token");
                    setAdminToken("");
                }
                throw new Error(
                    result.message || "Unable to update the customer password.",
                );
            }

            setMessage(
                `Password updated for ${selectedCustomer.firstName} ${selectedCustomer.lastName}.`,
            );
            setSelectedCustomer(null);
            setNewCustomerPassword("");
        } catch (requestError) {
            setCustomerPasswordError(
                requestError instanceof TypeError
                    ? "Unable to connect to the server. Please try again."
                    : requestError.message,
            );
        } finally {
            setIsUpdatingCustomerPassword(false);
        }
    };

    const formatDate = (date) =>
        new Date(date).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });

    return (
        <div className="admin-page">
            <header className="admin-header">
                <a className="admin-brand" href="/" onClick={(event) => {
                    event.preventDefault();
                    onExit();
                }}>
                    <span className="admin-brand-mark"><FaShieldAlt /></span>
                    <span>Quick Fix <small>ADMIN</small></span>
                </a>
                <button className="admin-back-button" type="button" onClick={onExit}>
                    <FaArrowLeft />
                    <span>Back to website</span>
                </button>
            </header>

            {!adminToken ? (
                <section className="admin-login-card">
                    <div className="admin-login-icon"><FaLock /></div>
                    <p className="admin-eyebrow">SECURE ADMINISTRATION</p>
                    <h1>Admin sign in</h1>
                    <p className="admin-login-description">
                        Enter the admin password to manage orders and customer accounts.
                    </p>
                    <form onSubmit={handleLogin} className="admin-login-form">
                        <label htmlFor="admin-password">Password</label>
                        <input
                            id="admin-password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="current-password"
                            required
                        />
                        {error && <p className="admin-error" role="alert">{error}</p>}
                        <button type="submit" className="admin-primary-button">
                            Sign in
                        </button>
                    </form>
                </section>
            ) : (
                <section className="admin-orders">
                    <div className="admin-orders-heading">
                        <div>
                            <p className="admin-eyebrow">BOOKING MANAGEMENT</p>
                            <h1>
                                {activeSection === "orders"
                                    ? "Customer orders"
                                    : "Customer info"}
                            </h1>
                            <p>
                                {activeSection === "orders"
                                    ? "View bookings and update their current status."
                                    : "View customer details, order history, and manage passwords."}
                            </p>
                        </div>
                        <button
                            type="button"
                            className="admin-signout-button"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>

                    <nav className="admin-section-tabs" aria-label="Admin sections">
                        <button
                            type="button"
                            className={activeSection === "orders" ? "active" : ""}
                            aria-pressed={activeSection === "orders"}
                            onClick={() => setActiveSection("orders")}
                        >
                            Customer orders
                        </button>
                        <button
                            type="button"
                            className={activeSection === "customers" ? "active" : ""}
                            aria-pressed={activeSection === "customers"}
                            onClick={() => setActiveSection("customers")}
                        >
                            Customer info
                        </button>
                    </nav>

                    {error && <p className="admin-error admin-notice" role="alert">{error}</p>}
                    {message && <p className="admin-success admin-notice" role="status">{message}</p>}

                    {activeSection === "orders" ? (
                        isLoading ? (
                            <div className="admin-empty">Loading orders...</div>
                        ) : orders.length === 0 ? (
                            <div className="admin-empty">No customer orders have been placed yet.</div>
                        ) : (
                            <div className="admin-table-wrap">
                                <table className="admin-orders-table">
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Customer</th>
                                            <th>Service &amp; location</th>
                                            <th>Placed</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td>
                                                    <span className="admin-order-id">
                                                        #{order.id.slice(-8).toUpperCase()}
                                                    </span>
                                                </td>
                                                <td>
                                                    <strong>{order.user?.name || order.customerName}</strong>
                                                    <span>{order.user?.email || order.customerPhone}</span>
                                                    {order.user?.phone && <span>{order.user.phone}</span>}
                                                </td>
                                                <td>
                                                    <strong>{order.service}</strong>
                                                    <span>{order.location}</span>
                                                </td>
                                                <td>{formatDate(order.createdAt)}</td>
                                                <td>
                                                    <select
                                                        aria-label={`Update status for order ${order.id}`}
                                                        className={`admin-status-select order-status-${order.status}`}
                                                        value={order.status}
                                                        disabled={updatingOrderId === order.id}
                                                        onChange={(event) =>
                                                            handleStatusChange(order.id, event.target.value)
                                                        }
                                                    >
                                                        {statuses.map((status) => (
                                                            <option key={status} value={status}>
                                                                {status}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    ) : (
                        isLoadingCustomers ? (
                            <div className="admin-empty">Loading customer information...</div>
                        ) : customers.length === 0 ? (
                            <div className="admin-empty">No customer accounts have been registered yet.</div>
                        ) : (
                            <div className="admin-customers-list">
                                {customers.map((customer) => (
                                    <article className="admin-customer-card" key={customer.id}>
                                        <div className="admin-customer-heading">
                                            <div>
                                                <h2>{customer.firstName} {customer.lastName}</h2>
                                                <p>{customer.email}</p>
                                                <p>{customer.phone}</p>
                                                <p>Customer since {formatDate(customer.createdAt)}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="admin-customer-password-button"
                                                onClick={() => {
                                                    setSelectedCustomer(customer);
                                                    setNewCustomerPassword("");
                                                    setCustomerPasswordError("");
                                                }}
                                            >
                                                Update password
                                            </button>
                                        </div>
                                        <div className="admin-customer-summary">
                                            <strong>{customer.orderCount} {customer.orderCount === 1 ? "order" : "orders"}</strong>
                                            <span>
                                                {customer.orders.length
                                                    ? statuses
                                                          .filter((status) =>
                                                              customer.orders.some(
                                                                  (order) => order.status === status,
                                                              ),
                                                          )
                                                          .map(
                                                              (status) =>
                                                                  `${customer.orders.filter((order) => order.status === status).length} ${status}`,
                                                          )
                                                          .join(" · ")
                                                    : "No order statuses yet"}
                                            </span>
                                        </div>
                                        <div className="admin-customer-order-history">
                                            <h3>Order history</h3>
                                            {customer.orders.length === 0 ? (
                                                <p className="admin-customer-no-orders">No orders placed.</p>
                                            ) : (
                                                <ul>
                                                    {customer.orders.map((order) => (
                                                        <li key={order.id}>
                                                            <strong>{order.service}</strong>
                                                            <span className="admin-customer-order-location">
                                                                {order.location}
                                                            </span>
                                                            <span className={`admin-customer-status order-status-${order.status}`}>
                                                                {order.status}
                                                            </span>
                                                            <span>{formatDate(order.createdAt)}</span>
                                                            {order.status === "pending" && (
                                                                <span className="admin-pending-age">
                                                                    Pending for {order.pendingDays} {order.pendingDays === 1 ? "day" : "days"}
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )
                    )}

                    {selectedCustomer && (
                        <div
                            className="admin-password-overlay"
                            onClick={() => {
                                if (!isUpdatingCustomerPassword) {
                                    setSelectedCustomer(null);
                                }
                            }}
                        >
                            <section
                                className="admin-password-dialog"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="admin-password-title"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <h2 id="admin-password-title">
                                    Update password
                                </h2>
                                <p>
                                    Set a new password for {selectedCustomer.firstName}{" "}
                                    {selectedCustomer.lastName}.
                                </p>
                                <form
                                    className="admin-password-form"
                                    onSubmit={handleCustomerPasswordUpdate}
                                >
                                    <label htmlFor="new-customer-password">
                                        New password
                                    </label>
                                    <input
                                        id="new-customer-password"
                                        type="password"
                                        value={newCustomerPassword}
                                        onChange={(event) =>
                                            setNewCustomerPassword(event.target.value)
                                        }
                                        autoComplete="new-password"
                                        minLength={8}
                                        maxLength={128}
                                        required
                                    />
                                    {customerPasswordError && (
                                        <p className="admin-error" role="alert">
                                            {customerPasswordError}
                                        </p>
                                    )}
                                    <div className="admin-password-actions">
                                        <button
                                            type="button"
                                            className="admin-password-cancel"
                                            disabled={isUpdatingCustomerPassword}
                                            onClick={() => setSelectedCustomer(null)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="admin-primary-button"
                                            disabled={isUpdatingCustomerPassword}
                                        >
                                            {isUpdatingCustomerPassword
                                                ? "Updating..."
                                                : "Save password"}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}
