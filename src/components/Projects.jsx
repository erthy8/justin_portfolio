import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../constants";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={` w-full h-auto flex flex-col gap-20`} id="projects">
      <div className="w-full flex flex-col gap-8 mb-5">
        <h1
          className={`self-center pb-[1rem] font-bold text-center bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] text-transparent bg-clip-text`}
        >
          Projects.
        </h1>
      </div>
      <div className="w-full mx-auto gap-20 justify-center flex flex-row flex-wrap px-10 max-w-[90rem]">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => openModal(project)}
            className="cursor-pointer"
            initial={{  y: -75, opacity:0, scale:.8 }}
            whileInView={{ y: 0, opacity:1, scale:1 }}
            transition={{ duration: .4 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .4, ease:"easeIn" }}
            className="fixed"
          >
            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
