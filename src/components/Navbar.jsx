// src/components/Navbar.jsx
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { ref: navRef, inView: navInView } = useInView({ threshold: 0.2 });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: navInView ? 1 : 0, y: navInView ? 0 : -50 }}
      transition={{ duration: 1 }}
      className="navbar-container sticky top-0 z-50 flex w-full justify-between items-center h-16 bg-[#282b28] mx-auto px-16 text-white shadow-lg"
    >
      <p className="font-bold text-4xl text-[#efaabf]">NK.</p>

      <ul className="hidden md:flex">
        <li className="ml-12 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="ml-12 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          <Link to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="ml-12 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <AiOutlineClose size={20} color="#EECAD5" />
        ) : (
          <AiOutlineMenu size={20} color="#EECAD5" />
        )}
      </div>

      <motion.div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#a06c76] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"
        }
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: nav ? 1 : 0, x: nav ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#EECAD5] mt-6 p-4">
          Menu
        </h1>
        <ul className="uppercase text-#1E201E">
          <li onClick={handleNav} className="p-4 text-xl text-[#1E201E] border-b relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
            <Link to="home" smooth={true} offset={50} duration={500}>
              HOME
            </Link>
          </li>
          <li onClick={handleNav} className="p-4 text-xl text-[#1E201E] border-b relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
            <Link to="about" smooth={true} offset={50} duration={500}>
              ABOUT
            </Link>
          </li>
          <li onClick={handleNav} className="p-4 text-xl text-[#1E201E] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
