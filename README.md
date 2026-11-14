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

When the frontend and backend are hosted on separate origins, set
`VITE_AUTH_API_URL` to the backend auth endpoint (for example,
`https://api.example.com/api/auth`) and set `CORS_ORIGINS` in the backend
environment to the frontend origin. Multiple allowed origins can be
comma-separated.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
