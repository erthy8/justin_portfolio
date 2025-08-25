import React from 'react'
import { motion } from "framer-motion";
import { IoIosPaperPlane } from "react-icons/io";
import { LuMouse } from "react-icons/lu";


import { styles } from '../styles'
import { portrait, phong_resume } from '../assets';
import { useCardTilt } from './cardTilt.jsx'
const About = () => {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <section id='about' className={`text-white w-full h-auto flex flex-col ${styles.paddingX}`} >
      <h1 className='self-center pb-[3rem] font-bold bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] text-transparent bg-clip-text '>About Me</h1>
      <div className={`flex flex-row ${styles.paddingX} h-auto gap-[6rem] mx-auto`}>
        
        <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='w-[20rem] h-[27rem] relative place-content-center rounded-xl bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] hidden xl:flex hover:shadow-lg hover:shadow-indigo-500/50 transition-scale duration-150' style={{transformStyle: "preserve-3d", rotateX, rotateY}}
          initial= {{ x: -250, opacity: 0 }}
          whileInView= {{ x:0, opacity:1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 35, damping:10,  duration: .6 }}
        >
          <div className='absolute z-30 top-[-1rem] font-light text-gray-400 flex flex-row gap-1 items-center animate-pulse text-xs'>
            <LuMouse className='animate-bounce '/>
            hover me
          </div>
          <img  className=" rounded-lg absolute inset-y--2 inset-x-2 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:cursor-move" src={portrait} alt='self-portrait' draggable="false" style={{ transform: "translateZ(20px)" ,transformStyle: "preserve-3d"}}></img>
        </motion.div>

        <motion.div className='max-w-[32rem] min-w-[15rem] text-2xl'
          initial= {{ x: 250, opacity: 0 }}
          whileInView= {{ x:0, opacity:1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 35, damping:10, duration: .6 }}
        >
          <p>I'm a third year Computer Science student at the University of Virginia. </p>
          <br></br>
          <p>I'm currently working towards a BSCS with a minor in applied mathematics. </p>
          <br></br>
          <p>I have a passion for learning and making an impact through software.</p>
          <div className='w-full h-auto flex mt-10 '>
            <a href={phong_resume} target='_blank' className='mx-auto' rel="noreferrer" >
              <div className='flex flex-row h-auto w-auto  text-fuchsia-50 items-center gap-1 rounded-2xl  bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] px-3 py-1 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                <IoIosPaperPlane />
                Resume
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About