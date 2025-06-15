import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  const closeMenubar = () => {
    setMenuOpen(false);
  };
  const openMenubar = () => {
    if (window.innerWidth < 1024) {
      // Check if the screen width is less than 1024px (mobile devices)
      setMenuOpen(!menuOpen);
    }
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    }
  };
  //The mousedown event is used to detect when a mouse button is pressed down.
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  // The return statement provides a cleanup function that removes the handleClickOutside event listener when the component unmounts or before the effect re-runs.
  return (
    <nav className="bg-white shadow fixed z-50 right-0 left-0 w-full">
      <div className="container mx-auto px-4 lg:px-12 ">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link
              className="text-xl font-bold text-gray-600 flex items-center cursor-pointer"
              to="home"
            >
              <img src={Logo} alt="" />

            </Link>
          </div>
          <div
            className="lg:hidden text-2xl flex items-center cursor-pointer"
            onClick={openMenubar}
          >
            {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </div>
          <div
            className={`lg:static absolute bg-white top-16  ${
              menuOpen
                ? "block opacity-100 w-[280px] bg-[#2d314d] right-0 p-8 "
                : "hidden opacity-0 top-[100%]"
            } lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}
            ref={navRef}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-12  space-y-10  lg:space-y-0">
              <Link
                to="home"
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "home"
                    ? "text-purple-500"
                    : "text-[#9698a6] hover:text-gray-500"
                }`}
                onClick={() => {
                  handleSetActive("home");
                  closeMenubar();
                }}
              >
                Home
              </Link>
              <Link
                to="about"
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "about"
                    ? "text-purple-500"
                    : "text-[#9698a6] hover:text-gray-500"
                }`}
                onClick={() => {
                  handleSetActive("about");
                  closeMenubar();
                }}
              >
                About
              </Link>
              <Link
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "contact"
                    ? "text-purple-500"
                    : "text-[#9698a6] hover:text-gray-500"
                }`}
                onClick={() => {
                  handleSetActive("contact");
                  closeMenubar();
                }}
                to="contact"
              >
                Contact
              </Link>
              <Link
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "blog"
                    ? "text-purple-500"
                    : "text-[#9698a6] hover:text-gray-500"
                }`}
                onClick={() => handleSetActive("blog")}
                to="blog"
              >
                Blog
              </Link>
              <Link
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "careers"
                    ? "text-purple-500"
                    : "text-[#9698a6] hover:text-gray-500"
                }`}
                onClick={() => handleSetActive("careers")}
                to="careers"
              >
                Careers
              </Link>
              <div className="block lg:hidden">
                <Link
                  className={`border mt-3 w-full px-3 py-2 text-lg font-medium rounded-full cursor-pointer ${
                    activeLink === "request-invite"
                      ? "bg-purple-500 text-white"
                      : "bg-linear-to-r from-[#31d35c] to-[#9698a6] text-white "
                  }`}
                  onClick={() => handleSetActive("request-invite")}
                  to="request-invite"
                >
                    Request Invite
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Link
              className={`border  px-6 py-2 text-lg font-medium rounded-full cursor-pointer ${
                activeLink === "request-invite"
                  ? "bg-purple-500 text-white"
                  : "bg-linear-to-r from-[#31d35c] to-[#9698a6] text-white "
              }`}
              onClick={() => handleSetActive("request-invite")}
              to="request-invite"
            >
                Request Invite
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
