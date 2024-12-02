"use client";
import React from "react";
import { Container } from "../container";
import { motion } from "framer-motion";
import { SkillsDetails } from "./resource-details";
import { mainResources, styleResources } from "./resource-data";
import { slideInFromBottom } from "@/lib/motion";
import { ResourcesTranslation } from "@/@types/transtate";

interface ResourcesProps {
  translation: ResourcesTranslation;
}
/**
 * A component that renders a section about my skills and experience. It
 * contains a title, a short description and two lists of skills - one for
 * main skills and one for styling skills.
 *
 * @param {ResourcesProps} props - props of the component
 * @param {ResourcesTranslation} props.translation - translation of the section
 * @returns {JSX.Element} - a TSX element
 */
export const Resources: React.FC<ResourcesProps> = ({ translation }) => {
  return (
    <Container className="w-full ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromBottom(0.2, 2)}
        viewport={{ once: true }}
        className=""
      >
        <h2 className=" mb-8 mt-10 lg:mt-0 pt-1 title  text-[35px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  leading-tight capitalize text-center">
          {translation.title}
        </h2>
        <p className="text-lg text-center">{translation.description}</p>

        <motion.div
          variants={slideInFromBottom(0.2, 2)}
          className="flex flex-col md:flex-row gap-10 md:gap-8 "
        >
          <SkillsDetails
            title={translation.subtitle}
            skills={mainResources}
            type="right"
          />
          <SkillsDetails
            title={translation.subtitle_two}
            skills={styleResources}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
