import React, { useState,useEffect } from "react";
import { Link } from 'react-scroll';

import { FaBarsProgress } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    setShowNav(true);
  };
  const closeNav = () => {
    setShowNav(false);
  };
  useEffect(() => {
    if (showNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showNav]);
  return (
    <>
      <header>
        <nav className="">
          <ul className="w-full fixed top-0 right-0 left-0 flex items-center px-4 justify-between min-h-[clamp(50px,7vh,100px)] text-xl text-white font-bold bg-[#FF90BB] shadow-2xl shadow-[#4e4e4e]">
            <li>
              <p>Shristi Thapa</p>
            </li>
            <li className="flex items-center">
              <button onClick={openNav}>
                <p>
                  <FaBarsProgress />
                </p>
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={`h-screen w-screen fixed   text-white  duration-600  transform ${
            showNav
              ? "translate-x-0 backdrop-blur-sm opacity-100 bg-black/80"
              : "translate-x-full opacity-50 bg-black"
          }`}
        >
          <div className="h-full w-full z-20 relative  flex justify-center items-center">
            <button
              onClick={closeNav}
              className="absolute top-6 right-6 text-2xl"
            >
              <GrClose />
            </button>
            <ul className="relative font-bold text-2xl items-center z-20 flex flex-col gap-4">
              <li>
                <Link to="home" smooth={true} duration={500} onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={closeNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  onClick={closeNav}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="socialmedia"
                  smooth={true}
                  duration={500}
                  onClick={closeNav}
                >
                  Follow ME !
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
