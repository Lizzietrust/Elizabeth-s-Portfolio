import { BackgroundBeams } from "./ui/background-beams";
import { FaDownload } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="py-16 pb-28 relative bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <BackgroundBeams />
      <div className="flex items-center justify-center flex-col relative z-10">
        <h1
          id="hero-title"
          className="md:text-7xl text-4xl text-center leading-tight md:leading-[80px] font-extrabold animate-fadeIn bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-700 bg-clip-text text-transparent drop-shadow-lg"
        >
          Hello, I&apos;m Elizabeth
          <span className="block text-violet-300 mt-2">Frontend Developer</span>
        </h1>
        <p className="text-center md:w-2/3 mt-7 text-lg text-slate-300 font-medium animate-fadeIn delay-100">
          I create fast, responsive, and visually stunning digital experiences.
          I meticulously pay attention to every detail and am passionate about
          new web technologies and translate innovative ideas into products and
          create interfaces that inspire and captivate individuals.
        </p>
        <div className="flex items-center justify-center gap-8 mt-12 relative z-10">
          <a
            href="/assets/My-Resume.pdf"
            download
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-semibold shadow-lg transition-all duration-200 hover:from-violet-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-violet-400 text-base gap-2"
            aria-label="Download My Resume"
          >
            Download CV <FaDownload />
          </a>
          <a
            href="mailto:ohidaelizabeth3@gmail.com"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-violet-500 text-violet-200 font-semibold bg-transparent hover:bg-violet-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 text-base gap-2"
            aria-label="Send me an email"
          >
            Mail <IoMdMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
