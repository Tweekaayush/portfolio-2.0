import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import SocialMediaIcons from "../components/styled/SocialMediaIcons";
import StyledLink from "../components/styled/StyledLink";

const Layout = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app relative">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main className="px-6.25 sm:px-12.5 md:px-25 lg:px-37.5 w-full max-w-400 min-h-screen my-0 mx-auto">
        {children}
      </main>
      <SocialMediaIcons />
      <StyledLink />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Layout;
