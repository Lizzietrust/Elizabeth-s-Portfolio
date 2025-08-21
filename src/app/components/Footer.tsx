"use client";

import { socialLinks } from "@/constants";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-violet-200 mb-4">
              Let&apos;s Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:ohidaelizabeth3@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <IoMdMail className="text-lg" />
                <span>ohidaelizabeth3@gmail.com</span>
              </a>
              <p className="flex items-center gap-3 text-slate-300">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available for opportunities</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-violet-200 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-slate-300 hover:text-violet-400 transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="block text-slate-300 hover:text-violet-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-slate-300 hover:text-violet-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-slate-300 hover:text-violet-400 transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-violet-200 mb-4">
              Follow Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-violet-400 hover:border-violet-500 transition-all duration-200 hover:scale-110"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  {social.icon === "github" && <FaGithub className="text-xl" />}
                  {social.icon === "linkedin" && (
                    <FaLinkedin className="text-xl" />
                  )}
                  {social.icon === "twitter" && (
                    <FaTwitter className="text-xl" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-violet-200 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I&apos;m passionate about creating exceptional user experiences and
              always excited to take on new challenges. Let&apos;s discuss how I can
              contribute to your next project.
            </p>
            <a
              href="mailto:ohidaelizabeth3@gmail.com?subject=Frontend Developer Opportunity"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105"
            >
              Start a Conversation <IoMdMail />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-0">
            <span>© 2024 Elizabeth Ohida. </span>
            
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:text-violet-400 hover:border-violet-500 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
