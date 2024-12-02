import React from "react";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";

interface MobileMenuBtnProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  translation: { [key: string]: string };
}

/**
 * A button component for toggling the mobile menu.
 *
 * It displays a menu icon when the menu is closed and a close icon when the menu is open.
 * The button is visible only on smaller screens (hidden on large screens).
 *
 * @prop {boolean} isOpen - Determines if the menu is currently open.
 * @prop {React.Dispatch<React.SetStateAction<boolean>>} setIsOpen - Function to toggle the menu state.
 */
export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  isOpen,
  setIsOpen,
  translation,
}) => {
  return (
    <button
      type="button"
      aria-label={translation.aria_mobile_menu}
      className="group lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <IoClose
          size={30}
          className="group-hover:text-primary transition-colors"
        />
      ) : (
        <TbMenuDeep
          size={30}
          className="group-hover:text-primary transition-colors"
        />
      )}
    </button>
  );
};
