import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoN from "../assets/logoN.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-16 pb-2 text-white shadow-lg">
      <img src={logoN} alt="Logo" className="h-12 pt-2" /> 

      <ul className="hidden md:flex">
        <li className="ml-12 pt-2 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          HOME
        </li>
        <li className="ml-12 pt-2 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          ABOUT
        </li>
        <li className="ml-12 pt-2 text-[#EECAD5] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#F7EED3] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
          CONTACT
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} color="#EECAD5"/> : <AiOutlineMenu size={20} color="#EECAD5" />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#F7EED3] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-full "
        }
      >
        <h1 className="text-3xl font-bold text-[#EECAD5] m-6">Happy Reading!</h1>
        <ul className="uppercase text-black">
          <li className="p-4 border-b  text-[#f3739a] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">HOME</li>
          <li className="p-4 border-b  text-[#f3739a] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">ABOUT</li>
          <li className="p-4  text-[#f3739a] relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#ea9bdd] after:left-0 after:bottom-0 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
