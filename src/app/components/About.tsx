// import { gridItems } from "@/constants"
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { FaReact, FaGithub, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  const stacks = [
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-[#F7DC6F]" />,
    },
    { name: "React JS", icon: <FaReact className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#007acc]" /> },
    { name: "Next JS", icon: <RiNextjsFill className="text-[#3b82fc]" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-[#f9fafb]" />,
    },
    { name: "Git", icon: <FaGithub className="text-[#f1502f]" /> },
    { name: "Sass", icon: <FaSass className="text-[#cd669a]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764abc]" /> },
  ];
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 w-full"
    >
      <h1 className="text-center text-5xl font-bold mb-10 text-violet-200 tracking-tight">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-5xl mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-lg text-slate-300 leading-relaxed mb-6 text-center md:text-left">
            With a modern frontend skills set, I develop intricate user
            interfaces considering all user centric performance.
            <br /> <br />
            Alongside an extensive background utilizing hands on experience with
            React.Js, TypeScript, Next.Js, and similar frameworks, I am
            extremely proficient in building responsive, scalable web
            applications. My commitment towards programming efficiency combined
            with my desire for clean structured code ensures efficient and up to
            date webapp.
            <br /> <br />
            My technical considerations as well as fundamental principles
            emphasize seamless interaction as well as high engagement, extending
            to flawless operational versatility. Every project that I am
            involved in puts me in a collaborated atmosphere from where I tend
            to not only learn but get excited to apply other technologies and
            methodologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {stacks.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 shadow hover:shadow-violet-500/30 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-slate-200 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-violet-700 to-indigo-500 flex items-center justify-center shadow-2xl">
            <span className="text-7xl text-white font-bold">E</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
