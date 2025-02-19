import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="w-full fixed backdrop-blur-[100px] bg-white bg-opacity-40 z-20">
      <div className="flex justify-between items-center pt-[20px] px-5 max-w-[1400px] mx-auto p-2 ">
        <img className="w-44 lg:mr-[100px]" src="" alt="/" />
        <ul className="justify-center font-medium  hidden lg:flex">
          <li className="mx-6">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 hover:text-red-400 hover:duration-1000"
                    : "hover:text-red-400 hover:duration-1000"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 hover:text-red-400 hover:duration-1000"
                    : "hover:text-red-400 hover:duration-1000"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="mx-6">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-800 hover:text-red-400"
                    : "hover:text-red-500"
                }`
              }
              to="/causes"
            >
              Causes
            </NavLink>
          </li>
        </ul>
        <Link to="/donate">
          <button className="hover:bg-blue-900 hidden lg:flex bg-blue-600 items-center text-center text-white text-lg px-16 py-4 rounded-lg">
            Donate Now
            <span>
              <FaArrowRight size={20} className="pl-2" />
            </span>
          </button>
        </Link>

        {/* small screen */}
        <LuMenu
          size={40}
          onClick={toggleMobileMenu}
          className="lg:hidden bg-blue-600 text-white rounded-lg"
        />
        <div
          className={`fixed inset-0 bg-white h-screen z-50 pt-[20px] p-5 transition-transform duration-500 ease-in-out ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full md:-translate-x-full"
          } md:w-1/2 w-full`}
        >
          <button
            className="absolute top-0 right-0 p-5"
            onClick={toggleMobileMenu}
          >
            <IoClose size={30} />

            {/* Add your close icon here */}
          </button>
          <ul className="flex flex-col justify-center h-screen items-center font-medium md:justify-start md:mt-10 space-y-6">
            <li className="mx-6 ">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 hover:text-red-400 hover:duration-1000"
                      : "hover:text-red-400 hover:duration-1000"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="mx-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 hover:text-red-400 hover:duration-1000"
                      : "hover:text-red-400 hover:duration-1000"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
            </li>
            <li className="mx-6">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-800 hover:text-red-400"
                      : "hover:text-red-500"
                  }`
                }
                to="/causes"
                onClick={toggleMobileMenu}
              >
                Causes
              </NavLink>
            </li>
          </ul>
          <Link
            to="/donate"
            className="flex flex-col md:justify-start justify-center"
          >
            <button
              className="hover:bg-blue-900 bg-blue-600 flex justify-center -mt-[300px] items-center text-center text-white text-lg px-10 py-4 rounded-lg"
              onClick={toggleMobileMenu}
            >
              Make a Donation
              <span>
                <FaArrowRight size={20} className="pl-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
