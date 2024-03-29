import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home";
import Nominations from "./routes/nominations";
import NoRoute from "./routes/noRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoRoute />,
    children: [
      {
        path: "nominations",
        element: <Nominations />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
    <ToastContainer limit={1} />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
