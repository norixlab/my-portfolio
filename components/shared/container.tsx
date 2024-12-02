import React from "react";
import { cn } from "@/lib/utils";
import { ContainerProps } from "postcss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * A container component that centers its children horizontally and limits the width
 * to 1440px. It also adds a small amount of horizontal padding.
 *
 * @example
 * <Container>
 *   <div>My content</div>
 * </Container>
 *
 * @param {React.ReactNode} children - The children to be rendered inside the container
 * @param {string} [props.className] - Additional class names to be added to the container
 * @returns {React.ReactElement} - The container element
 */
export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1440px] w-full px-[10px] mx-auto ", className)}>
      {children}
    </div>
  );
};
