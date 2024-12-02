"use client";
import { motion, useScroll } from "framer-motion";

/**
 * A functional component that renders a progress bar using framer-motion.
 * The progress bar scales along the X-axis based on the scroll position.
 * Utilizes the useScroll hook to track the scroll progress.
 */
export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress " style={{ scaleX: scrollYProgress }} />
  );
};
