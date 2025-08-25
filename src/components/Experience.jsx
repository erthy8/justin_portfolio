// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "1em",
      }}
      contentArrowStyle={{ borderRight: "8px solid white" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            draggable="false"
          />
        </div>
      }
      className='hover:scale-105 transition ease-in-out duration-700'
    >
      <div className='hover:cursor-grabbing'>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold text-[#d8b4fe]'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-normal'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className='mx-auto' id='experience' >
      <motion.div >
        <h1 className={`self-center font-bold text-center bg-gradient-to-r from-[#4d52ff] to-[#cf3dfd] text-transparent bg-clip-text`} >
          Work Experience.
        </h1>
      </motion.div>

      <div className='mt-16 flex flex-col ' >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default Experience