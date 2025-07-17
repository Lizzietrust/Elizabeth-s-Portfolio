import React from "react";
import { FaReact, FaGithub, FaSass, FaReactQuery } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DC6F]" /> },
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <h1 className="text-center text-5xl font-bold mb-10 text-violet-200 tracking-tight">
        Skills
      </h1>
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
        {skills.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/80 border border-slate-700 shadow hover:shadow-violet-500/30 transition-all min-w-[120px]"
          >
            <span className="text-4xl mb-1">{item.icon}</span>
            <span className="text-slate-200 font-semibold text-lg">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
