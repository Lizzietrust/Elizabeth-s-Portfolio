import React from 'react'
import { projects } from '@/constants'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='py-5' id='projects'>
      <h1 className='text-center text-5xl font-semibold mb-4 pb-5'>Projects</h1>

      <div className='grid grid-cols-3 gap-y-8 gap-x-6 pb-10'>
        {projects.map((item, i) => (
          <div className='glass h-[550px] rounded-2xl p-5' key={i}>
            <div className='relative w-full h-1/2 mb-5 rounded-xl object-cover'>
              <Image src={item.img} alt='' className='rounded-xl' fill />
            </div>

            <h3 className='text-center text-2xl font-semibold pb-2 h-20'>{item.title}</h3>

            <p className='text-center h-28'>{item.des}</p>

            <div className="flex items-center justify-between gap-7">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-1/2">
                      
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#221335_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a href={item.github} target='_blank' download className="w-full h-full flex items-center justify-center">
                    Github
                  </a>
                </span>
                  
              </button>

              <button className="shadow-[inset_0_0_0_2px_#616467] text-white rounded-full tracking-widest uppercase bg-transparent hover:bg-violet-700 hover:bg-opacity-10 hover:text-white dark:text-neutral-200 transition duration-200 w-1/2 h-12 text-sm font-medium cursor-pointer z-20 flex items-center justify-center gap-2">
                <a href={item.link} target='_blank' className="w-full h-full flex items-center justify-center">
                  Live Demo
                </a> 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
