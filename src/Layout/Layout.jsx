import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
