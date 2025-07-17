"use client";

import { experience } from "@/constants";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 w-full"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-violet-200 tracking-tight">
            Professional Experience
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My journey in frontend development, from learning the fundamentals
            to delivering production-ready applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 to-indigo-500"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } ml-12 md:ml-0`}
                >
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-violet-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-violet-200 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg text-slate-300 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 md:mt-0">
                        <FaCalendarAlt />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-violet-300 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-violet-300 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-violet-800/30 text-violet-200 text-sm rounded-full border border-violet-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-violet-800/20 to-indigo-800/20 border border-violet-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-violet-200 mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative
              projects and grow as a frontend developer. Let's discuss how I can
              add value to your team.
            </p>
            <a
              href="mailto:ohidaelizabeth3@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105"
            >
              Let's Connect <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
