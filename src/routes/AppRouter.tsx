// src/routes.tsx
import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home"; // <-- import your Home page
import About from "../pages/About";
import Corporate_consulting from "../pages/Corporate_consulting";
import Services from "../pages/Services";
import Programs from "../pages/Programs";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Corporate_consulting",
        element: <Corporate_consulting />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
