"use client";

import { ClearButton } from "./clear-button";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { ErrorText } from "./error-text";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

/**
 * TextareaForm is a component that wraps a textarea element in a form.
 * It handles clearing the value of the textarea by clicking on the clear button.
 * The clear button is hidden if the value of the textarea is empty.
 * The component displays an error message if the value of the textarea is invalid.
 *
 * @param {Props} props - The props of the component.
 * @param {string} props.className - The class name of the component.
 * @param {string} props.name - The name of the textarea element.
 * @param {string} [props.label] - The label of the textarea element.
 * @param {boolean} [props.required] - Whether the textarea element is required.
 * @param {*} props.children - The children elements of the component.
 *
 * @example
 * <TextareaForm name="description" label="Description" required />
 */
export const TextareaForm: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>

      <div className="relative ">
        <Textarea
          className="focus:shadow-[0_2px_3px_rgba(191,255,83,0.5)] shadow-[0_2px_3px_rgba(191,255,83,1)] border-none rounded-xl   text-base"
          {...register(name)}
          {...props}
        />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-[2px]" />}
    </div>
  );
};
