import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.jpg";
import csharp from "../assets/cs.png";
import rct from "../assets/rct.png";
import py from "../assets/python.png";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  // Hook for detecting if elements are in view
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });
  const { ref: iconsRef, inView: iconsInView } = useInView({ threshold: 0.2 });

  return (
    <div name="about" className="w-full h-[120vh] text-white">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 mt-64">
            <motion.p
              ref={aboutRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -50 }}
              transition={{ duration: 1 }}
              className="text-[#efaabf] mx-4 text-3xl sm:text-5xl inline border-b-4 border-[#b7ecc5] font-bold"
            >
              About Me
            </motion.p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }}
            transition={{ duration: 1 }}
            className="sm:text-right text-3xl sm:text-5xl font-bold"
          >
            <p className="text-[#a06c76] inline">
              Hi I'm Micah, nice to meet you.
            </p>
          </motion.div>
          <motion.div
            className="mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: textInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              I have a deep passion for web development and I am enthusiastic
              about building responsive websites that provide great user
              experiences. I'm constantly exploring new web development
              courses and learning to create dynamic and engaging web
              applications.
            </p>
            <p className="pt-4 pb-4">
              While I'm still in the learning process, I've gained some
              foundational knowledge in Python and C#, and I'm eager to expand
              my skills further. My journey in technology is driven by a
              desire to innovate and grow, and I'm excited to continue
              developing my abilities in both front-end and back-end
              development.
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={iconsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: iconsInView ? 1 : 0, y: iconsInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="w-[80%] grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8"
        >
          {/* HTML Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-2">HTML</p>
          </div>
          {/* CSS Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto h-22" src={css} alt="CSS icon" />
            <p className="my-2">CSS</p>
          </div>
          {/* JavaScript Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto" src={js} alt="JavaScript icon" />
            <p className="my-2">JavaScript</p>
          </div>
          {/* C# Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto" src={csharp} alt="C# icon" />
            <p className="my-2">C#</p>
          </div>
          {/* Python Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto" src={py} alt="Python icon" />
            <p className="my-2">Python</p>
          </div>
          {/* React Icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-90 duration-500">
            <img className="w-20 mx-auto" src={rct} alt="React icon" />
            <p className="my-2">React</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
