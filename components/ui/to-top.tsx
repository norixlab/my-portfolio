"use client";
import React from "react";
import Link from "next/link";
import { TbChevronsUp } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface Props {
  className?: string;
  isVisible?: boolean;
}

/**
 * Renders a sticky "To top" button that appears when the user scrolls down more than half of the viewport height.
 * The button is hidden on mobile devices and appears on desktop devices.
 *
 * @param className - The class name of the root element.
 *
 * @returns A sticky "To top" button component.
 */
export const ToTop: React.FC<Props> = ({ className }) => {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScrollPosition) => {
    const viewportHeight = window.innerHeight;

    latestScrollPosition > viewportHeight * 0.5
      ? setIsButtonVisible(true)
      : setIsButtonVisible(false);
  });

  return (
    <div
      className={cn(
        "sticky w-fit bottom-5 ml-auto right-5 z-[100] hidden md:block duration-300",
        isButtonVisible && "block",
        className
      )}
    >
      <Link
        aria-label="To top"
        href="#home"
        className="primary_link py-[8px] px-[10px] rounded-[50%] flex items-center justify-center"
      >
        <TbChevronsUp size={23} />
      </Link>
    </div>
  );
};
