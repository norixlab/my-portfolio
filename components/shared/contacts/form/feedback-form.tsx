"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { feedbackSchema, TFeedbackSchema } from "@/lib/schemes/feedback-schema";

import { ModalNotification } from "../../modal-notification";
import PrimaryButton from "@/components/ui/button";
import { InputForm } from "./input-form";
import { SelectForm } from "./select-form";
import { TextareaForm } from "./textarea-form";
import { ContactsTranslation } from "@/@types/transtate";

interface Props {
  className?: string;
  translation: ContactsTranslation;
}

/**
 * A component that renders a feedback form.
 * It includes a select dropdown for theme selection, two input fields for name and email,
 * a textarea for the message and a submit button.
 * The component uses react-hook-form to manage form state and validation.
 * The form data is sent to the server via a POST request to the "/api/mail" endpoint.
 * A notification is displayed indicating the success or failure of the submission.
 * The form is reset after submission.
 * @param {Props} props - The properties for the component.
 * @param {ContactsTranslation} props.translation - The translation object containing text content.
 * @returns {JSX.Element} - A TSX element representing the feedback form.
 */
export const FeedbackForm: React.FC<Props> = ({ translation, className }) => {
  const [showNotification, setShowNotification] = React.useState(false);
  const [type, setType] = React.useState("");

  const form = useForm<TFeedbackSchema>({
    defaultValues: {
      subject: "",
    },
    resolver: zodResolver(feedbackSchema),
  });

/**
 * Handles the submission of the feedback form.
 * 
 * Sends the form data to the server via a POST request to the "/api/mail" endpoint.
 * Displays a notification indicating the success or failure of the submission.
 * Resets the form after submission.
 * 
 * @param {TFeedbackSchema} data - The data collected from the feedback form.
 */
  const onSubmit = async (data: TFeedbackSchema) => {
    /**
     * Handles displaying a notification and hiding it after a delay.
     * @param {string} type - The type of notification to display.
     */
    const handleNotification = (type: string) => {
      setShowNotification(true);
      setType(type);
      setTimeout(() => {
        setShowNotification(false);
        setType("");
      }, 5000);
    };
    try {
      const result = await axios.post("/api/mail", data);

      if (result.status === 200) {
        handleNotification("success");
      }
    } catch (error) {
      handleNotification("error");
      console.log(error);
    } finally {
      form.reset();
    }
  };
  return (
    <div className={cn("z-50 max-w-[650px] w-full customBorder ", className)}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 py-5 px-5 md:px-10"
        >
          <SelectForm
            name={"subject"}
            label={translation.form.select.label}
            required
            translation={translation}
          />
          <InputForm
            name={"name"}
            label={translation.form.name.label}
            placeholder={translation.form.name.placeholder}
            required
            className="w-full  "
          />
          <InputForm
            name={"from"}
            label={translation.form.email.label}
            placeholder={translation.form.email.placeholder}
            required
            className="w-full  "
          />

          <TextareaForm
            name={"body"}
            rows={5}
            label={translation.form.message.label}
            placeholder={translation.form.message.placeholder}
            className="w-full mb-5"
          />

          <PrimaryButton type="submit" loading={form.formState.isSubmitting}>
            {translation.button}
          </PrimaryButton>
        </form>
      </FormProvider>
      <ModalNotification
        notificationType={type}
        isOpen={showNotification}
        setIsOpen={setShowNotification}
      />
    </div>
  );
};
