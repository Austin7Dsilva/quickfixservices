# React + Vite

## Authentication

The frontend provides customer registration and sign-in using the backend routes
`POST /api/auth/register` and `POST /api/auth/login`. Registration accepts first
and last name, mobile number, email, and password. Sign-in accepts an email or
mobile number and password.

For local development, start the backend with `npm run dev --prefix backend`
and the frontend with `npm run dev`. Vite proxies `/api` requests to
`http://localhost:5001`. The backend requires `MONGO_URI` and `JWT_SECRET` in
`backend/.env`.

The `/admin` order-management page requires an `ADMIN_PASSWORD` environment
variable on the backend, in addition to `JWT_SECRET`. Set it in the local
`backend/.env` or the production backend's environment settings; keep the
password out of source control. The admin sign-in issues an eight-hour admin
token, which is required to list all orders or change an order's status.
Set `ADMIN_PASSWORD` to the password selected for the admin page in both local
and production backend environments, then restart or redeploy the backend.

When the frontend is opened on localhost, authentication uses the local Vite
proxy. On other hosts, it uses
`https://quickfixservices.onrender.com/api/auth`. The backend allows both
`https://quickfixservices.co.in` and `https://www.quickfixservices.co.in` by
default, along with the local Vite origins. Add any other deployed frontend
origins to `CORS_ORIGINS` in the backend environment as a comma-separated list
(for example, a preview deployment URL). Redeploy the backend after changing
its CORS configuration.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
