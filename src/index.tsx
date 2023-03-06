import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Root from "./Root";
import Videos from "./components/Videos/Videos";
import ResourceDetail from "./components/Resources/ResourceDetail";
import Resources from "./components/Resources/Resources";
import { CartProvider } from "react-use-cart";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import "./fonts/BalooBhai-Regular.ttf";

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
    path: "/platform",
    element: <Root />,
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
            path: "/platform/videos",
            element: <></>,
          },
          { path: "/platform/videos/:id", element: <h1>Videos</h1> },
          {
            path: "/platform/resources",
            element: <Videos parent={"root"} />,
          },
          {
            path: "/platform/resources/:id",
            element: <ResourceDetail />,
          },
          { path: "/platform/messages", element: <h1>Mensajes</h1> },
          { path: "/platform/configuration", element: <h1>Configuracion</h1> },
          { path: "/platform/checkout", element: <Checkout /> },
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
