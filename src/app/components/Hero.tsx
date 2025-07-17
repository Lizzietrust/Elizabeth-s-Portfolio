import { BackgroundBeams } from "./ui/background-beams";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { socialLinks } from "@/constants";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="py-16 pb-28 relative bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen flex items-center"
    >
      <BackgroundBeams />
      <div className="flex items-center justify-center flex-col relative z-10">
        <div className="text-center mb-8">
          <p className="text-violet-400 font-medium mb-4 animate-fadeIn">
            Welcome to my portfolio
          </p>
          <h1
            id="hero-title"
            className="md:text-7xl text-4xl text-center leading-tight md:leading-[80px] font-extrabold animate-fadeIn bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-700 bg-clip-text text-transparent drop-shadow-lg"
          >
            Hello, I&apos;m Elizabeth
            <span className="block text-violet-300 mt-2">
              Frontend Developer
            </span>
          </h1>
        </div>

        <p className="text-center md:w-2/3 mt-7 text-lg text-slate-300 font-medium animate-fadeIn delay-100 leading-relaxed">
          I build delightful digital products utilizing contemporary web
          technologies. Enthusiastic about developing scalable, user friendly,
          and high performing accessible solutions that provide value to
          consumers and drive growth. Focused on React, Next.js, and TypeScript.
        </p>

        <div className="flex items-center justify-center gap-6 mt-8 animate-fadeIn delay-200">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Available for opportunities</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 relative z-10">
          <a
            href="/assets/Resume.pdf"
            download
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-semibold shadow-lg transition-all duration-200 hover:from-violet-600 hover:to-indigo-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 text-base gap-2"
            aria-label="Download My Resume"
          >
            Download Resume <FaDownload />
          </a>
          <a
            href="mailto:ohidaelizabeth3@gmail.com"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-violet-500 text-violet-200 font-semibold bg-transparent hover:bg-violet-700 hover:text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 text-base gap-2"
            aria-label="Send me an email"
          >
            Get In Touch <IoMdMail />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fadeIn delay-300">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-violet-400 hover:border-violet-500 transition-all duration-200 hover:scale-110"
              aria-label={`Visit my ${social.name} profile`}
            >
              {social.icon === "github" && <FaGithub className="text-xl" />}
              {social.icon === "linkedin" && <FaLinkedin className="text-xl" />}
              {social.icon === "twitter" && <FaTwitter className="text-xl" />}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">6+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">3+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">100%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400">15+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
