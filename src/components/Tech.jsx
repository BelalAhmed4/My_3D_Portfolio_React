import React from "react";
import { SectionWrapper } from "../hoc";
import Tilt from "react-parallax-tilt";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  const TechCard = ({ index, icon }) => (
    <Tilt
      className="xs:w-[190px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-black-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-transparent rounded-[20px] py-5 px-8 min-h-[90px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
        </div>
      </motion.div>
    </Tilt>
  );
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <TechCard key={technology.name} icon={technology.icon} />
        // <div className='w-28 h-28' key={technology.name}>
        //   <BallCanvas icon={technology.icon} />
        // </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
