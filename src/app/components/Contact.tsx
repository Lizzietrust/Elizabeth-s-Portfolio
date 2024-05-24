import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
  return (
    <div className='pb-10 flex items-center justify-center flex-col' id='contact'>
      <h1 className='text-center text-5xl font-semibold mb-4 pb-5'>Contact Me</h1>

      <div className="glass w-[600px] h-20 rounded-xl flex items-center p-5">
        <div className="flex items-center justify-between w-full h-full">
            <a href="mailto:ohidaelizabeth3@gmail.com" className="w-full h-full flex items-center justify-center gap-3">
                <IoMdMail />
                ohidaelizabeth3@gmail.com
            </a>

            <a href="tel:+2349033225875?call" className="w-full h-full flex items-center justify-center gap-3">
                <FaPhone />
                +2349033225875
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
