import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Check } from "lucide-react";

interface Props {
  notificationType: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * A modal component that displays a success or error message after sending a message or email.
 * @param {Props} props - The component props.
 * @param {string} props.notificationType - The type of notification to display, either "success" or "error".
 * @param {boolean} props.isOpen - Is the modal open or not.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOpen - Function to toggle the modal state.
 */
export const ModalNotification: React.FC<Props> = ({
  notificationType,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn(
          "border-green-500 max-h-[500px] rounded-xl border-[2px] text-white",
          {
            "border-red-500": notificationType === "error",
          }
        )}
      >
        <DialogHeader>
          <DialogTitle
            className={cn("text-[22px]", {
              "text-red-500": notificationType === "error",
            })}
          >
            {notificationType === "success"
              ? "Successfully sent"
              : "Sending error"}
          </DialogTitle>
          <DialogDescription className="text-white text-[16px] ">
            {notificationType === "success"
              ? "I am already reading your email and will get back to you soon. Thank you."
              : "Sorry there was an error in sending, please try again later or use another method of contact."}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
