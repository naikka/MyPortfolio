import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-[#efaabf] mx-4 text-5xl inline border-b-4 border-[#b7ecc5] font-bold mt-24">
              About Me
            </p>
          </div>
          <div></div>

          <div className="sm:text-right text-4xl font-bold mx-4">
            <p className="text-[#a06c76] inline">
              Hi I'm Micah, nice to meet you.
            </p>
          </div>

          <div>
            <p>
              I have a deep passion for web development and am enthusiastic
              about building responsive websites that provide great user
              experiences. I'm constantly exploring new web development courses
              and learning to create dynamic and engaging web applications.
            </p>
            <p className="pt-8">
            While I'm still in the learning process, I've gained some
              foundational knowledge in Python and C#, and I'm eager to expand
              my skills further. My journey in technology is driven by a desire
              to innovate and grow, and I'm excited to continue developing my
              abilities in both front-end and back-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
