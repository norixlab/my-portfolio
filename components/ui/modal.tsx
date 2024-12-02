"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface Props {
  text: React.ReactNode;
  title: string;
  name: string;
  className?: string;
}

/**
 * A modal component that can be used to display some text to the user.
 * The text is displayed in a dialog that can be closed by the user.
 * The component is a trigger that, when clicked, opens the dialog.
 * The trigger is a button with the text of the name prop.
 *
 * @prop {string} title - The title of the modal.
 * @prop {string} name - Text of the button to open a modal window.
 * @prop {string} text - Text of the modal window content.
 * @prop {string} [className] - The class name of the modal.
 */

export const Modal: React.FC<Props> = ({ title, name, text, className }) => {
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger asChild>
          <button className="primary_link border-[2px] text-[14px] px-[10px] py-[6px] border-transparent group-hover:border-white">
            {name}
          </button>
        </DialogTrigger>
        <DialogContent className="border-zinc-400 max-h-[500px]  overflow-y-auto bgBlock border-[2px] text-white">
          <DialogHeader>
            <DialogTitle className="text-[22px]">{title}</DialogTitle>
            <DialogDescription className="text-white text-[16px] ">
              {text}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
