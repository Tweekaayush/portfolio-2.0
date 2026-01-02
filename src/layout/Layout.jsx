import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <main className="px-12.5 md:px-25 lg:px-37.5 w-full max-w-400 min-h-screen my-0 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
