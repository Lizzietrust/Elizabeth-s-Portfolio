"use client";

import { skills } from "@/constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 w-full"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-5xl font-bold mb-4 text-violet-200 tracking-tight">
            Skills & Expertise
          </h1>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            I focus on new tools and technologies in the frontend area with an
            emphasis on application user experience, ease of maintenance, and
            long term sustainability. I am also a quick learner and always
            looking to improve my skills, expand my knowledge and stay up to
            date with the latest trends in the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-violet-300 mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-slate-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/30 border border-slate-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-violet-300 mb-6 text-center">
            Additional Skills & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Webpack",
              "Vite",
              "ESLint",
              "Prettier",
              "REST APIs",
              "GraphQL",
              "JWT",
              "OAuth",
              "Responsive Design",
              "Mobile First",
              "Progressive Web Apps",
              "Web Accessibility",
              "Agile/Scrum",
              "Git Flow",
              "Code Review",
              "Technical Documentation",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-violet-500 transition-colors"
              >
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
