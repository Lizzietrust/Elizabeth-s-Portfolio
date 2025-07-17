import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center"
      id="contact"
    >
      <h1 className="text-center text-5xl font-bold mb-10 text-violet-200 tracking-tight">
        Contact Me
      </h1>
      <div className="w-full max-w-xl bg-slate-800/80 border border-slate-700 rounded-2xl shadow-xl p-8 flex flex-col gap-6 items-center">
        <a
          href="mailto:ohidaelizabeth3@gmail.com"
          className="flex items-center gap-4 text-lg text-slate-200 hover:text-violet-400 transition-colors font-medium"
          aria-label="Send me an email"
        >
          <IoMdMail className="text-2xl" />
          ohidaelizabeth3@gmail.com
        </a>
        <a
          href="tel:+2349033225875?call"
          className="flex items-center gap-4 text-lg text-slate-200 hover:text-violet-400 transition-colors font-medium"
          aria-label="Call me"
        >
          <FaPhone className="text-2xl" />
          +2349033225875
        </a>
      </div>
    </section>
  );
};

export default Contact;
