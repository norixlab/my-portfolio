"use client";
import React from "react";
import { Container } from "../container";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromTop } from "@/lib/motion";
import { Ring } from "./ring";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FeedbackForm } from "./form/feedback-form";
import { ContactsTranslation } from "@/@types/transtate";

interface ContactsProps {
  translation: ContactsTranslation;
}
/**
 * A component that renders the contacts section of the website.
 * It includes a title, a grid of social media links and a form for leaving feedback.
 * The component is animated with Framer Motion.
 *
 * @param {ContactsProps} props - The properties for the component.
 * @param {ContactsTranslation} props.translation - The translation object containing text content.
 * @returns {JSX.Element} - A TSX element representing the contacts section.
 */
export const Contacts: React.FC<ContactsProps> = ({ translation }) => {
  return (
    <Container className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col  items-center justify-center"
      >
        <motion.h2
          variants={slideInFromBottom(0.2, 2)}
          viewport={{ once: true }}
          className="mb-16 mt-10 lg:mt-0 title text-[40px] sm:text-[50px] md:text-[60px] leading-tight capitalize text-center scroll-m-10"
        >
          {translation.title}
        </motion.h2>

        <motion.div
          variants={slideInFromBottom(0.2, 2)}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-24 mb-10 "
        >
          <Ring
            ariaLabel="Telegram"
            icon={<FaTelegramPlane />}
            href={"https://t.me/norixlab"}
          />
          <Ring
            ariaLabel="WhatsApp"
            icon={<FaWhatsapp />}
            href={"https://wa.me/message/W7TW3RZT2NESN1"}
          />
          <Ring
            ariaLabel="Instagram"
            icon={<FaLinkedin className="text-[25px] md:text-[35px]"/>}
            href={"https://www.linkedin.com/in/sergey-taydakov-33b56633b"}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center py-5 w-full"
      >
        <FeedbackForm translation={translation} />
      </motion.div>
    </Container>
  );
};
