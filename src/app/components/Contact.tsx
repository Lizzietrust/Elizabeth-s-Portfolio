import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-slate-900 to-slate-950"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-violet-200 tracking-tight">
            Let&apos;s Work Together
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities and collaborate on interesting projects. 
            Whether you have a specific project in mind or just want to connect, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-violet-200 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:ohidaelizabeth3@gmail.com"
                className="flex items-center gap-4 text-lg text-slate-200 hover:text-violet-400 transition-colors font-medium group"
                aria-label="Send me an email"
              >
                <div className="w-12 h-12 bg-violet-600/20 border border-violet-500/30 rounded-full flex items-center justify-center group-hover:bg-violet-600/30 transition-colors">
                  <IoMdMail className="text-xl text-violet-400" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-400">ohidaelizabeth3@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+2349033225875"
                className="flex items-center gap-4 text-lg text-slate-200 hover:text-violet-400 transition-colors font-medium group"
                aria-label="Call me"
              >
                <div className="w-12 h-12 bg-violet-600/20 border border-violet-500/30 rounded-full flex items-center justify-center group-hover:bg-violet-600/30 transition-colors">
                  <FaPhone className="text-xl text-violet-400" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-slate-400">+234 903 322 5875</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-violet-200 mb-6">
              Send a Message
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <a
                href="mailto:ohidaelizabeth3@gmail.com?subject=Frontend Developer Inquiry"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
