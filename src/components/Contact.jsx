// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";


import { beach_portrait } from "../assets";

const Contact = () => {
  return (
    <div
      className={`flex flex-col flex-wrap items-center w-full h-fit bg-[#1d1836] pt-5 gap-5 `}
      id='contact'
    >
      <h2
        className={`self-center pb-[1rem] font-bold text-4xl text-center bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] text-transparent bg-clip-text`}
      >
        {"<"}Contact{"/>"}
      </h2>
      <div className="rounded-full overflow-hidden w-48 items-center border border-[#4d52ff] bg-indigo-500 shadow-lg shadow-indigo-500/50">
        <img
          src={beach_portrait}
          className="object-contain scale-150 translate-y-4"
          draggable="false"
        />
      </div>

      <motion.div className="flex gap-[3rem] flex-wrap py-5"
        initial={{ y:0 }}
        whileInView={{ y: [-20, 0] }}
        transition={{ type: 'spring', stiffness: 115, damping:6, duration: 1 }}
      >
        <a href="mailto:phongl.hoa@gmail.com" target="_blank" className="hover:cursor-pointer text-4xl hover:scale-125 hover:-translate-y-2 transition-transform duration-300" rel="noreferrer">
          <MdEmail />
        </a>
        <a href="https://www.instagram.com/phong.hle/?next=%2F&hl=en" target="_blank" className="hover:cursor-pointer text-4xl hover:scale-125 hover:-translate-y-2 transition-transform duration-300" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/phongo1" target="_blank" className="hover:cursor-pointer text-4xl hover:scale-125 hover:-translate-y-2 transition-transform duration-300" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/phongle1x/" target="_blank" className="hover:cursor-pointer text-4xl hover:scale-125 hover:-translate-y-2 transition-transform duration-300" rel="noreferrer">
          <FaLinkedin />
        </a>
      </motion.div>
      <div className=" w-full h-9 relative bottom-0 flex items-center justify-center gap-3">
        <span className="text-xs text-indigo-200">Built with</span>
        <FaReact className="text-indigo-200"/>
        
        <SiVite className="text-indigo-200"/>
        
        <BiLogoTailwindCss className="text-indigo-200"/>
      </div>
    </div>
  );
};

export default Contact;
