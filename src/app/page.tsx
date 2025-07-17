// import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import { FloatingNav } from "./components/ui/FloatingNav";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen">
      <div className="text-white w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
