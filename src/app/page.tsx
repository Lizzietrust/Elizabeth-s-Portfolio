// import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import { FloatingNav } from "./components/ui/FloatingNav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="bg-black w-full h-screen py-10">
      <div className="text-white w-[90%] mx-auto">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
