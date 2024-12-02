import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { ClearButton } from "./clear-button";
import { ErrorText } from "./error-text";
import { Input } from "@/components/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name: string;
  label?: string;
  required?: boolean;
}

/**
 * InputForm is a component that renders a form input element with a label and
 * error handling. It integrates with react-hook-form to manage form state and
 * validation.
 *
 * @prop {string} name - The name of the form field.
 * @prop {string} [label] - The label for the input field.
 * @prop {boolean} [required] - Indicates if the field is required.
 * @prop {string} [className] - Additional class names for styling.
 * @prop {string} [inputClassName] - Additional class names for the input element.
 * @prop {string} [labelClassName] - Additional class names for the label element.
 *
 * @returns {JSX.Element} The rendered InputForm component.
 */
export const InputForm: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  inputClassName,
  labelClassName,
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
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <p
          className={cn(
            "font-medium mb-1",
            { "opacity-50": props.disabled },
            labelClassName
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <div className="relative">
        <Input
          {...register(name)}
          className={cn(
            "h-12 text-base focus:shadow-[0_2px_3px_rgba(191,255,83,0.5)] border-none shadow-[0_2px_3px_rgba(191,255,83,1)]",
            inputClassName
          )}
          {...props}
        />
        {value && !props.disabled && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mt-[2px]" />}
    </div>
  );
};
