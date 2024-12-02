import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  onClick?: VoidFunction;
}

/**
 * A button for clearing input form values.
 *
 * It is an absolutely positioned `<X>` icon that can be used to clear the
 * value of a form input. It is positioned at the right of the input and
 * centered vertically. It has a default opacity of 0.3 and becomes fully
 * opaque when hovered.
 *
 * @prop {string} [className] - The class name of the button.
 * @prop {VoidFunction} [onClick] - The function to call when the button is
 *   clicked.
 */

export const ClearButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer",
        className
      )}
    >
      <X className="h-5 w-5" />
    </button>
  );
};
