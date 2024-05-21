import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden w-full h-screen">
      <div className="text-white w-[90%] mx-auto">
        <Hero />
      </div>
    </main>
  );
}
