"use client";

import React, { useState } from "react";
import { projects } from "@/constants";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[number];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section
      className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 px-3 md:px-0"
      id="projects"
    >
      <h1 className="text-center text-5xl font-bold mb-10 pb-2 text-violet-200 tracking-tight">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 px-2 md:px-12">
        {projects.map((item, i) => (
          <div
            className="group bg-slate-800/80 border border-slate-700 shadow-xl rounded-3xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-violet-500 cursor-pointer"
            key={i}
            onClick={() => setSelected(item)}
            tabIndex={0}
            aria-label={`Show more about ${item.title}`}
          >
            <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.title || `Project ${i + 1}`}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                priority={i === 0}
              />
            </div>
            <h3 className="text-center text-2xl font-semibold text-violet-100 mb-2 min-h-[56px]">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {item.tags &&
                item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-violet-800/40 text-violet-200 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <p className="text-center text-slate-300 mb-6 flex-1">{item.des}</p>
            <div className="flex gap-4 mt-auto">
              {item?.github && <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-12 rounded-full bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-semibold shadow-md transition-all duration-200 hover:from-violet-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label={`View ${item.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-12 rounded-full border border-violet-500 text-violet-200 font-semibold bg-transparent hover:bg-violet-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label={`View live demo of ${item.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        open={!!selected}
        onClose={() => setSelected(null)}
        project={selected}
      />
    </section>
  );
};

export default Projects;
