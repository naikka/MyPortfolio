
import React from "react";
import { Link } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";

const UpButtonPage = () => {
  return (
    <div className="">
    
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="fixed bottom-8 right-8 bg-[#a06c76] text-white px-4 py-2 rounded-full cursor-pointer shadow-lg hover:bg-[#874d5c]"
      >
        <FaChevronUp />
      </Link>
    </div>
  );
};

export default UpButtonPage;
