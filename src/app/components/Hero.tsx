// import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { BackgroundBeams } from "./ui/background-beams"
import { FaDownload } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';


const Hero = () => {
    return (
        <div className="ty-8 pb-20">
            <BackgroundBeams />
             
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-6xl text-center leading-[80px] font-semibold'>
                    Hello✋, I&apos;m Elizabeth, your go to
                    <span className="block text-violet-700">Frontend developer.</span> 
                </h1>
                {/* <TextGenerateEffect 
                    className=""
                    words="Hello, I&apos;m Elizabeth, your go to Frontend developer."
                /> */}
                <p className='text-center w-1/2 mt-5'> I&apos;m a frontend developer with a passion for building fast, responsive, and visually stunning digital experiences. With a keen eye for detail and a deep understanding of web development best practices, I bring innovative ideas to life and create interfaces that captivate and inspire users.</p>
            </div>

            <div className="flex items-center justify-center gap-10 mt-10">

                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-40">
                    
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#221335_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <a href='/assets/My-Resume.pdf' download className="w-full h-full flex items-center justify-center">
                                Download CV
                                <FaDownload className='ml-2' />
                            </a>
                        </span>
                    
                </button>

                <button className="shadow-[inset_0_0_0_2px_#616467] text-white rounded-full tracking-widest uppercase bg-transparent hover:bg-violet-700 hover:bg-opacity-10 hover:text-white dark:text-neutral-200 transition duration-200 w-40 h-12 text-sm font-medium cursor-pointer z-20 flex items-center justify-center gap-2">
                    <a href="mailto:ohidaelizabeth3@gmail.com" className="w-full h-full flex items-center justify-center">
                        Mail
                        <IoMdMail />
                    </a>
                    
                </button>
            </div>
        </div>
    )
}

export default Hero