"use client";
import Image from "next/image";
import { Container } from "../container";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/lib/motion";
import PrimaryLink from "@/components/ui/link";
import about from "@/public/about.png";
import { BaseTranslation } from "@/@types/transtate";

interface AboutProps {
  translation: BaseTranslation;
}

/**
 * A component that renders the about section of the website.
 * It includes a title, a subtitle, a photo of me, a description
 * and a link to the projects section.
 *
 * @param {AboutProps} props - The properties for the component.
 * @param {BaseTranslation} props.translation - The translation object containing text content.
 * @returns {JSX.Element} - A TSX element representing the about section.
 */
export const About: React.FC<AboutProps> = ({ translation }) => {
  return (
    <Container >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" flex-col flex lg:flex-row lg:items-center justify-between gap-[30px]"
      >
        <div className="order-2 lg:order-1 flex justify-start w-full">
          <Image
            className="relative right-[5px]  w-[400px] md:w-full md:max-w-[600px] h-auto"
            src={about}
            alt="My photo"
            width={600}
            height={600}
            quality={75}
            priority={false}
          />
        </div>

        <motion.div
          variants={slideInFromRight(0.2, 2)}
          viewport={{ once: true }}
          className="max-w-[650px] mt-20 lg:mt-24  order-1"
        >
          <motion.h2
            variants={slideInFromTop(0.2, 2)}
            viewport={{ once: true }}
            className="title font-[Orbitron] text-[35px] sm:text-[50px] md:text-[60px] text-left   xxs:text-[45px] capitalize leading-tight	 "
          >
            {translation.title}
          </motion.h2>

          <h3 className="text-[25px] sm:text-[32px] font-bold mb-[20px] text-primary">
            {translation.subtitle}
          </h3>

          <div className="mb-[50px] text-[19px] leading-snug space-y-3">
            <p>{translation.description}</p>

            <p>{translation.subdescription}</p>
          </div>

          <PrimaryLink
            name={translation.button || "My Projects"}
            href="#projects"
            className="w-fit"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
