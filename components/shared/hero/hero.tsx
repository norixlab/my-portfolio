"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import PrimaryLink from "../../ui/link";
import { Container } from "@/components/shared";
import { SocialLinks } from "@/components/ui/social-links";
import myPhotoHero from "@/public/hero.png";
import { HeroTranslation } from "@/@types/transtate";
import { cn } from "@/lib/utils";
import { Locale } from "@/i18n.config";

interface HeroProps {
  locale: Locale;
  translation: HeroTranslation;
}
/**
 * A component that renders the hero section of the website.
 * It includes a title, name, subtitle, and description with animations.
 * There is also a link to the contacts section and social media links.
 * An image is displayed alongside the text content.
 *
 * @param {HeroProps} props - The properties for the component.
 * @param {Locale} props.locale - The locale for language-specific styling.
 * @param {HeroTranslation} props.translation - The translation object containing text content.
 * @returns {JSX.Element} - A TSX element representing the hero section.
 */
export const Hero: React.FC<HeroProps> = ({ locale, translation }) => {
  return (
    <Container className="pb-[30px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col-reverse pt-[80px] lg:flex-row justify-between items-center gap-[30px] sm:gap-[50px]"
      >
        <motion.div
          variants={slideInFromTop(0.2, 2)}
          viewport={{ once: true }}
          className=" flex flex-col  justify-center mt-5 w-full"
        >
          <motion.p
            variants={slideInFromRight(0.2, 2)}
            viewport={{ once: true }}
            className=" font-bold text-[25px] sm:text-[32px] leading-snug"
          >
            {translation.title}
          </motion.p>
          <motion.h1
            variants={slideInFromLeft(0.2, 2)}
            viewport={{ once: true }}
            className="font-bold title lg:promoTitleRev font-[Orbitron] text-[35px] sm:text-[50px] md:text-[56px] text-left  capitalize leading-snug	"
          >
            {translation.name}
          </motion.h1>
          <h2 className="mb-[20px] font-bold text-[23px] md:text-[32px] ">
            {translation.subtitle}&nbsp;
            <span className="text-[#bfff53] ">{translation.subtitle_span}</span>
          </h2>
          <motion.div
            variants={slideInFromRight(0.2, 2)}
            viewport={{ once: true }}
            className="text-[19px] mb-[30px] flex flex-col gap-3 leading-snug max-w-[600px]"
          >
            <p>{translation.description}</p>
            <p
              className={cn("flex flex-col text-balance", {
                "md:flex-row md:items-end": locale === "en",
              })}
            >
              {translation.subdescription}&nbsp;
              <span className="text-primary text-[22px]">
                {translation.subdescription_span}
              </span>
            </p>
          </motion.div>

          <SocialLinks />

          <PrimaryLink
            name={translation.button || "Contact Me"}
            href="#contacts"
            className="w-fit"
          />
        </motion.div>

        <div className=" flex justify-end w-full ">
          <Image
            className="w-[400px] md:w-full md:max-w-[600px] h-auto "
            src={myPhotoHero}
            alt="My photo"
            width={600}
            height={600}
            priority
            quality={75}
          />
        </div>
      </motion.div>
    </Container>
  );
};
