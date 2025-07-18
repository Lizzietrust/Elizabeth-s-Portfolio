import React from "react";
import Image from "next/image";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    details: string;
    tags: string[];
    screenshots: string[];
    github?: string;
    link: string;
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  project,
}) => {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-violet-400 text-2xl font-bold"
          aria-label="Close project details"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-violet-200 mb-4 text-center">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-violet-800/40 text-violet-200 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-slate-300 mb-4 text-center">{project.details}</p>
        <div className="flex gap-2 justify-center mb-4">
          {project.screenshots.map((src, i) => (
            <div
              key={i}
              className="relative w-32 h-20 rounded-lg overflow-hidden border border-slate-700"
            >
              <Image
                src={src}
                alt={project.title + " screenshot"}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-semibold shadow hover:from-violet-600 hover:to-indigo-500 transition-all"
          >
            GitHub
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-violet-500 text-violet-200 font-semibold bg-transparent hover:bg-violet-700 hover:text-white transition-all"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
