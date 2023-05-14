import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Root from "./Root";
import ResourceDetail from "./components/Resources/ResourceDetail";
import Resources from "./components/Resources/Resources";
import { CartProvider } from "react-use-cart";
import Checkout from "./components/Checkout/Checkout";
import Logout from "./components/Logout/Logout";
import UserConfiguration from "./components/UserConfiguration/UserConfiguration";
import UserEditProfile from "./components/UserConfiguration/UserEditProflie/UserEditProfile";
import { ProSidebarProvider } from "react-pro-sidebar";
import Register from "./components/Register/Register";
import CheckPayment from "./components/Checkout/CheckPayment/CheckPayment";
import Dashboard from "./components/Dashboard/Dashboard";
import "./fonts/BalooBhai-Regular.ttf";
import UploadResource from "./components/Admin/UploadResource/UploadResource";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <Register />,
  },
  {
    path: "/sign-out",
    element: <Logout />,
  },
  {
    path: "/platform",
    element: (
      <ProSidebarProvider>
        <Root />
      </ProSidebarProvider>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        errorElement: <h1>Error</h1>,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            element: <ProtectedRoutes />,
            children: [
              {
                path: "/platform/admin/dashboard",
                element: <h1>Admin dashboard</h1>,
              },
              {
                path: "/platform/admin/new-resource",
                element: <UploadResource />,
              },
            ],
          },

          { path: "/platform/videos/:id", element: <h1>Videos</h1> },
          {
            path: "/platform/resources",
            element: <Resources />,
          },
          {
            path: "/platform/resources/:id",
            element: <ResourceDetail />,
          },
          { path: "/platform/messages", element: <h1>Mensajes</h1> },
          { path: "/platform/configuration", element: <UserConfiguration /> },
          {
            path: "/platform/configuration/edit",
            element: <UserEditProfile />,
          },
          { path: "/platform/checkout", element: <Checkout /> },
          {
            path: "/platform/checkout/check-payment/:token",
            element: <CheckPayment />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <CartProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
