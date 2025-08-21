"use client";

import { testimonials } from "@/constants";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 w-full"
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
            What People Say
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Feedback from colleagues, clients, and mentors about my work and
            collaboration style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full hover:border-violet-500 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-white text-sm" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.avatar}
                  </div> */}
                  <div>
                    <h4 className="font-semibold text-violet-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    {/* <p className="text-xs text-slate-500">
                      {testimonial.company}
                    </p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-violet-800/20 to-indigo-800/20 border border-violet-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-violet-200 mb-4">
              Trusted by Developers & Designers
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I&apos;ve collaborated with various professionals across different
              industries, consistently delivering high-quality results and
              maintaining strong working relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Project Completion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
