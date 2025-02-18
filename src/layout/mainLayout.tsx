import React from "react";
import Nav from "../general/nav";
import Footer from "../general/footer";
import Information from "../general/information";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../general/scroll_to_top";


const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen overflow-hidden min-h-screen">
      <ScrollToTop />
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Information />
      <footer className="p-4 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
