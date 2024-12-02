"use client";
import Image from "next/image";
import React from "react";
import { Container } from "../container";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/lib/motion";
import { projects } from "./projects-data";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Locale } from "@/i18n.config";

interface ProjectsProps {
  locale: Locale;
  translation: {
    title: string;
  };
}
/**
 * A component that renders a section about my projects. It contains a title
 * and a grid of project cards. Each card contains a photo, a title, a short
 * description and a link to the project. The component is animated with
 * Framer Motion.
 *
 * @param {ProjectsProps} props - props of the component
 * @param {Locale} props.locale - current locale
 * @param {ProjectsTranslation} props.translation - translation of the section
 * @returns {JSX.Element} - a TSX element
 */
export const Projects: React.FC<ProjectsProps> = ({ locale, translation }) => {
  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromBottom(0.2, 2)}
        viewport={{ once: true }}
      >
        <h2 className=" mb-16 pt-1 mt-10 lg:mt-0 title   text-[40px] sm:text-[50px] md:text-[60px] leading-tight capitalize text-center">
          {translation.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[25px] ">
          {projects.map((project, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className="group projectsBox relative h-[300px] flex border-[2px] border-primary rounded-[20px] overflow-hidden"
              variants={slideInFromBottom(0.2, 2)}
            >
              <Image
                src={project.imageUrl}
                className="group-hover:scale-110  transition-transform duration-500 object-cover w-full h-full origin-center "
                width={500}
                height={300}
                alt={project.alt}
              />
              <div className="projectsLayer text-white">
                <h4 className="text-[30px]">{project.title[locale]}</h4>
                <p className="text-[18px] font-bold mt-[3px] mb-[10px]">
                  {project.description[locale]}
                </p>
                <Link
                  href={project.link}
                  aria-label={project.title[locale]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project_link"
                >
                  <BiLinkExternal />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};
