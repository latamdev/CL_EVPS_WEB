import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Root from "./Root";

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
    children: [
      {
        errorElement: <h1>Error</h1>,
        children: [
          { index: true, element: <h1>Index</h1> },
          { path: "/platform/videos", element: <h1>Videos</h1> },
          { path: "/platform/resources", element: <h1>Recursos</h1> },
          { path: "/platform/messages", element: <h1>Mensajes</h1> },
          { path: "/platform/configuration", element: <h1>Configuracion</h1> },
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
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
