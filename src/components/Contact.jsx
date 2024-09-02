// src/components/Contact.jsx
import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });

  
  return (
    <div name="contact" className="h-screen w-full bg-[#282b28] text-white flex flex-col items-center justify-center">
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8"
      >
        Contact Me
      </motion.h1>
      <motion.p
        ref={textRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg mb-4"
      >
        Feel free to reach out for any inquiries or collaborations.
      </motion.p>
      
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"  // Add text-black here
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"  // Add text-black here
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message:</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"  // Add text-black here
          ></textarea>
        </div>
        <button type="submit" className="bg-[#d9859f] hover:bg-[#9e596f] text-white px-4 py-2 rounded-md">Send</button>
      </form>

      {/* Social Media Links */}
      <div className="flex mt-8 space-x-6">
        <a href="https://www.facebook.com/naikalexia/" target="_blank" rel="noopener noreferrer" className="text-[#486cb9] hover:text-[#2d4373] text-5xl">
          <FaFacebook />
        </a>
        <a href="https://github.com/naikka" target="_blank" rel="noopener noreferrer" className="text-[#c4c2c2] hover:text-[#57616a] text-5xl">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/luvnaika/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#bc2a8d] text-5xl">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
