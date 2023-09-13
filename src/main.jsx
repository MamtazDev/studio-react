import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import TheStudio from "./Components/TheStudio/TheStudio/TheStudio.jsx";
import Team from "./Components/TheStudio/Team/Team.jsx";
import Services from "./Components/Services/Services/Services.jsx";
import Audio from "./Components/Services/Audio/Audio.jsx";
import Visual from "./Components/Services/Visual/Visual.jsx";
import Promotional from "./Components/Services/Promotional/Promotional.jsx";
import Digital from "./Components/Services/Digital/Digital.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Career from "./Components/Contact/Career.jsx";
import TermsAndCondition from "./Components/TermsAndCondition/TermsAndCondition.jsx";
import BlogDetails from "./Components/Blog/BlogDetails.jsx";
import "../src/Components/Blog/blog.json"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/theStudio",
        element: <TheStudio />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/audio",
        element: <Audio />,
      },
      {
        path: "/visual",
        element: <Visual />,
      },
      {
        path: "/digital",
        element: <Digital />,
      },
      {
        path: "/promotional",
        element: <Promotional />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
        // loader:rootLoader,
        // loader: ({ params }) =>
        // fetch(`../src/Components/Blog/blog.json/${params}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/termConditions",
        element: <TermsAndCondition />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
