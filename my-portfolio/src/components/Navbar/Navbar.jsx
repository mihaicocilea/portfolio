// Navbar.js
import React, { useState } from "react";
import "boxicons";
import { Link as Navigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-5">
      <div className="container bg-white/[.08] mx-auto flex items-center justify-between text-white rounded-3xl border-[0.5px] border-[#535050] px-10 py-2">
        <div className="font-[700] text-xl opacity-1">{`<MXCode />`}</div>

        <div className="lg:hidden">
          <button className="focus:outline-none" onClick={toggleNavbar}>
            <box-icon
              name="menu-alt-right"
              color="#ffffff"
              size="md"
            ></box-icon>
          </button>
        </div>

        <div className="hidden lg:block items-center font-[600]">
          <ul className="flex space-x-10">
            <Navigate to="/">Home</Navigate>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>

            <Navigate to="/about" onClick={scroll.scrollToBottom}>
              Skills
            </Navigate>

            <Link activeClass="active" smooth spy to="portfolio">
              Portfolio
            </Link>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-transparent text-white font-[500] py-2">
          <ul className="container mx-auto flex flex-col items-start space-y-4 bg-white/[.08] rounded-3xl border-[0.5px] border-[#535050] px-10 py-3">
            <Navigate to="/" onClick={toggleNavbar}>
              Home
            </Navigate>
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              onClick={toggleNavbar}
            >
              About
            </Link>

            <Navigate to="/about" onClick={scroll.scrollToBottom}>
              Skills
            </Navigate>

            <Link
              activeClass="active"
              smooth
              spy
              to="portfolio"
              onClick={toggleNavbar}
            >
              Portfolio
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
