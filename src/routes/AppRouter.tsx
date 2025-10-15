// src/routes.tsx
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Courses from "../pages/Courses";

// Lazy imports
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const CorporateConsulting = lazy(() => import("../pages/Corporate_consulting"));
const Services = lazy(() => import("../pages/Services"));
const Programs = lazy(() => import("../pages/Programs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

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
        element: <CorporateConsulting />,
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
      {
        path: "Course",
        element: <Courses />,
      },
    ],
  },
]);
