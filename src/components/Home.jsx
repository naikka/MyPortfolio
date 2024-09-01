import React from "react";
import { ReactTyped } from "react-typed";
import profilepic from "../assets/profilepic.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] flex flex-col justify-center items-center w-full h-full">
          <div className="w-full max-w-[900] h-screen md:h-screen mx-auto text-center flex flex-col">
            <ReactTyped
              className="text-[#EECAD5] text-6xl font-bold mt-40 text-center md:text-left md:ml-24 lg "
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

            <p className="md:ml-24 mx-14 md:mr-14 pt-4 md:pt-8 text-sm md:text-base md:text-left text-white">
              Hello! I'm Micah Gersava, an IT student at the University of
              Antique-Main, majoring in Networking and Security (NAS). Alongside
              my passion for network management and cybersecurity, I have a
              strong interest in fullstack web development. I enjoy creating
              dynamic web applications and building projects that blend
              creativity with technical skills.{" "}
            </p>
            <p className="md:ml-24 mx-14 md:mr-10 text-[#efaabf] pt-20 md:pt-20 text-sm md:text-xl md:text-left">
              Welcome to my portfolio, where you can explore my work, projects,
              and the skills I'm honing in both networking and web development.{" "}
            </p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-[#6a4a4f] hover:text-[#efaabf] cursor-pointer text-left ml-24 pt-4 underline "
            >
              Learn more about me.
            </Link>
          
          <img
            src={profilepic}
            alt="Profile"
            className="absolute bottom-0 right-0 mb-0 pb-0 w-[200px] h-[200px] hidden md:block md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[640px] xl:h-[640px] "
          />
          </div>
        </div>
      </div>
   
  );
};

export default Home;
