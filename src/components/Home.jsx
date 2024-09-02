import React from "react";
import { ReactTyped } from "react-typed";
import profilepic from "../assets/profilepic.png";
import { Link } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Home = () => {
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });
  const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.2 });

  return (
    <div
      name="home"
      className="relative justify-center items-center h-screen w-full md:h-screen"
    >
      <div className="mx-auto text-center flex flex-grow flex-col h-screen w-full">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
          transition={{ duration: 1 }}
          className="text-[#EECAD5] text-6xl font-bold mt-52 text-center md:text-left md:ml-24 lg"
        >
          <ReactTyped
            strings={[
              "Welcome",
              "환영",
              "Accueillir",
              "ようこそ",
              "Bienvenido",
              "स्वागत",
              "欢迎",
              "Benvenuto",
              "Chào mừng",
              "ยินดีต้อนรับ",
            ]}
            typeSpeed={90}
            backSpeed={80}
            loop
          />
        </motion.div>

        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="md:ml-24 mx-14 mr-56 md:mr-[500px] pt-4 md:pt-8 text-sm md:text-base md:text-left text-white"
        >
          Hello! I'm Micah Gersava, an IT student at the University of
          Antique-Main, majoring in Networking and Security (NAS). Alongside my
          passion for network management and cybersecurity, I have a strong
          interest in fullstack web development. I enjoy creating dynamic web
          applications and building projects that blend creativity with
          technical skills.
        </motion.p>
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="md:ml-24 mx-14 md:mr-[490px] text-[#efaabf] pt-12 md:pt-14 text-sm md:text-xl md:text-left"
        >
          Welcome to my portfolio, where you can explore my work, projects, and
          the skills I'm honing in both networking and web development.
        </motion.p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-[#6a4a4f] hover:text-[#efaabf] cursor-pointer text-left ml-24 pt-4 underline"
        >
          Learn more about me.
        </Link>
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: imgInView ? 1 : 0, scale: imgInView ? 1 : 0.8 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-[200px] h-[200px] hidden md:block md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[640px] xl:h-[640px]"
        >
          <img
            src={profilepic}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
