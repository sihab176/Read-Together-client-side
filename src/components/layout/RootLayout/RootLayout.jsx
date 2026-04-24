import React from "react";
import Navbar from "../../../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../../../shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
