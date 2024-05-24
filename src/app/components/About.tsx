// import { gridItems } from "@/constants"
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
"use client";
 
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { FaReact, FaGithub, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";



const About = () => {
    const stacks = [
        {name: 'JavaScript', icon: <IoLogoJavascript className='text-[#F7DC6F]' />},
        {name: 'React JS', icon: <FaReact className='text-blue-500' />},
        {name: 'TypeScript', icon: <SiTypescript className='text-[#007acc]' /> },
        {name: 'Next JS', icon: <RiNextjsFill className='text-[#3b82fc]' /> },
        {name: 'Tailwind CSS', icon: <RiTailwindCssFill className='text-[#f9fafb]' /> },
        {name: 'Git', icon: <FaGithub className='text-[#f1502f]' /> },
        {name: 'Sass', icon: <FaSass className='text-[#cd669a]' /> },
        {name: 'Redux', icon: <SiRedux className='text-[#764abc]' /> },
    ]
    return (
        <section id="about" className="pb-10 w-full">
            <div className="mb-5">
                <h1 className="text-center text-4xl mb-5 font-semibold">About Me</h1>
                {/* <div className="flex justify-between gap-10 w-full">     
                    <div>
                        <h3 className="text-center text-xl mb-3">Skills</h3>
                        <div className="flex gap-8 w-full flex-wrap justify-center">
                            {stacks.map((item, i) => (
                                <div key={i} className="text-white glass rounded-lg flex gap-4 items-center px-4 py-2 whitespace-nowrap">
                                    <div>{item.icon}</div>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                <div className="h-40 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={stacks}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>

            <div>
                <p>
                    With a strong foundation in HTML, CSS, and JavaScript, I craft seamless user experiences that delight and engage. My expertise in responsive design and mobile-first development ensures that my creations shine on any device. I&apos;m well-versed in popular frontend frameworks like React.js and Next.js, and I leverage their power to build fast, scalable, and maintainable applications. <br /> <br />

                    My passion for performance optimization and accessibility means that I go the extra mile to ensure that my projects are not only visually stunning but also lightning-fast and usable by everyone. I stay up-to-date with the latest web development trends and best practices, always seeking innovative ways to push the boundaries of what&apos;s possible in the digital realm.
                </p>
            </div>

        </section>
    )
}

export default About

