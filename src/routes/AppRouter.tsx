// src/routes.tsx
import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home"; // <-- import your Home page

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
