"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container } from "../container";
import { slideInFromBottom } from "@/lib/motion";
import { skills } from "./skills-data";
import { Locale } from "@/i18n.config";
import PrimaryLink from "@/components/ui/link";

interface SkillsProps {
  locale: Locale;
  translation: {
    title: string;
    button: string;
  };
}
/**
 * A React functional component that renders a list of skills with associated icons,
 * titles, and descriptions. Each skill includes a link to a detailed page.
 * The component uses motion animations for visual effects and applies styles
 * for responsiveness and interactivity.
 *
 * @param {SkillsProps} props - The properties object.
 * @param {Locale} props.locale - The locale for translation.
 * @param {Object} props.translation - The translation object containing the title.
 * @returns {JSX.Element} A TSX element representing the skills section.
 */
export const Skills: React.FC<SkillsProps> = ({ locale, translation }) => {
  return (
    <Container className="w-full ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromBottom(0.2, 2)}
        viewport={{ once: true }}
        className="  lg:mb-10"
      >
        <h2 className="mb-16 mt-10 lg:mt-0 pt-1 title  text-[35px] sm:text-[50px] md:text-[60px] xxs:text-[45px]  capitalize text-center">
          {translation.title}
        </h2>

        <motion.div
          variants={slideInFromBottom(0.2, 2)}
          className=" customBorder"
        >
          <div className="sm:px-5 grid grid-cols-2 sm:grid-cols-4 sm:gap-5 bgBlock rounded-[20px]  w-full">
            {skills.map((item) => (
              <div
                key={item.title}
                className="card flex flex-col gap-5 items-center justify-center group hover:scale-105 p-6 text-center  "
              >
                <div
                  className={cn(
                    "p-3 sm:p-4 text-[35px]  sm:text-[40px]  primary_gradient group-hover:text-[#abec3d] group-hover:bg-black group-hover:bg-none  text-black rounded-[15px] sm:rounded-[20px]  "
                  )}
                >
                  {item.icon}
                </div>

                <h3 className="text-[20px] line-clamp-1 lg:line-clamp-none sm:text-[26px] group-hover:text-black duration-200 group-hover:font-semibold">
                  {item.title}
                </h3>
                <p className="line-clamp-3 text-center  sm:line-clamp-4 text-[14px] sm:text-[16px] mb-2  group-hover:text-black duration-200 group-hover:font-semibold">
                  {item.description[locale]}
                </p>

                <PrimaryLink
                  ariaLabel={translation.button}
                  name={translation.button}
                  href={`${locale}/skills/${item.slug}`}
                  className="border-[2px] px-[15px] md:px-[30px] py-[6px] md:py-[8px] text-sm md:text-base border-transparent hover:border-white"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};
