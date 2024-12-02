import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

/**
 * A component to display an error text.
 *
 * @param text The text to be displayed as an error.
 * @param className The class name to be applied to the error text. Defaults to
 *                  an empty string.
 *
 * @returns A jsx element with the error text.
 */
export const ErrorText: React.FC<Props> = ({ text, className }) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
