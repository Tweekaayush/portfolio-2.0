import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main className="px-12.5 md:px-25 lg:px-37.5 w-full max-w-400 min-h-screen my-0 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
