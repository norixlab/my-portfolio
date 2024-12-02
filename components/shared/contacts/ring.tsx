import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  icon: React.ReactElement;
  href: string;
  ariaLabel?: string;
  className?: string;
}

/**
 * A component that renders a rotating ring animation with an icon.
 *
 * This component displays three rotating ring elements and centers an icon within them.
 * The icon is clickable and acts as a link to the specified URL.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactElement} props.icon - The icon to be displayed at the center of the rings.
 * @param {string} props.href - The URL to be navigated to when the icon is clicked.
 * @param {string} [props.className] - An optional class name to apply custom styling.
 *
 * @returns {JSX.Element} A JSX element containing the ring animation and icon.
 */
export const Ring: React.FC<Props> = ({ ariaLabel, icon, href, className }) => {
  return (
    <div className={cn("", className)}>
      <div className="relative flex justify-center items-center">
        <div className="ring_item" />
        <div className="ring_item" />
        <div className="ring_item" />
        <Link
          aria-label={ariaLabel}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer z-[30]"
        >
          <span className="cursor-pointer text-[27px] md:text-[40px] text-white  transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(171,236,61)] hover:scale-110">
            {icon}
          </span>
        </Link>
      </div>
    </div>
  );
};
