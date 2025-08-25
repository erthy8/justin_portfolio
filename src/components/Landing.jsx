import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";

import { styles } from "../styles";

const Landing = ({ isLoading }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({ opacity: 1, transition: { duration: 1.25 } });
    }
  }, [isLoading, controls]);
  

  return (
    <section
      className={`text-white w-full h-auto pt-[11rem] flex flex-wrap ${styles.paddingX} mx-auto gap-x-16 justify-center`}
    >
      {!isLoading && (
        <motion.div
          className="pb-16 w-fit h-[25rem] flex flex-col justify-center align-center gap-2"
          initial={{ x:-250, opacity:0 }}
          animate={{ x:0, opacity:1 }}
          transition={{ type: 'spring', stiffness: 80, damping:10, duration: 1 }}
        >
          <p className="text-4xl">Hello, I'm</p>
          <span className="font-bold text-6xl bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] text-transparent bg-clip-text ">
            <Typewriter
              options={{
                strings: ["Phong"],
                autoStart: true,
                loop: true,
                delay: 320,
                cursor: "_",
              }}
            />
          </span>
          <p className="text-base">an incoming software engineer</p>
        </motion.div>
      )}

      <motion.div
        className={`w-[45rem] h-[25rem] relative overflow-visible flex align-middle justify-center md:left-28 hover:cursor-grabbing`}
        initial= {{ opacity: 0 }}
        animate={controls}
      >
        <Spline scene="https://prod.spline.design/QAGyEAONPrAsk4Gv/scene.splinecode" />
        <div className="absolute mx-auto bg-transparent w-60 h-80 top-[10%] shadow-[0_20px_90px_-15px_rgba(79,70,229,0.5)] -z-10"></div>
      </motion.div>
    </section>
  );
};

export default Landing;
