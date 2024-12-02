import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "./error-text";
import { ContactsTranslation } from "@/@types/transtate";

interface Props {
  label?: string;
  required?: boolean;
  name: string;
  translation: ContactsTranslation;
  className?: string;
}

/**
 * SelectForm is a component that renders a select dropdown form element
 * using Radix UI's SelectPrimitive. It integrates with react-hook-form
 * to manage form state and validation.
 *
 * @param {Props} props - The props for the SelectForm component.
 * @param {string} props.name - The name of the form field.
 * @param {string} [props.label] - The label for the select field.
 * @param {boolean} [props.required] - Indicates if the field is required.
 * @param {ContactsTranslation} props.translation - The translations for the select options.
 * @param {string} [props.className] - Additional class names for styling.
 *
 * @returns {JSX.Element} The rendered SelectForm component.
 */
export const SelectForm: React.FC<Props> = ({
  name,
  label,
  required,
  translation,
  className,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch(name);

  const errorText = errors[name]?.message as string;
  const handleChange = (value: string) => {
    setValue(name, value);
  };
  return (
    <div className={cn("w-full flex flex-col gap-1", className)}>
      {label && (
        <p className={cn("font-medium mb-1")}>
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <Select value={selectedValue} onValueChange={handleChange}>
        <SelectTrigger className="h-12 rounded-xl border-none focus:shadow-[0_2px_3px_rgba(191,255,83,0.5)] shadow-[0_2px_3px_rgba(191,255,83,1)] text-base">
          <SelectValue placeholder={translation.form.select.placeholder} />
        </SelectTrigger>
        <SelectContent className="border-primary bg-background rounded-xl text-white">
          <SelectGroup>
            {translation.form.select.options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorText && <ErrorText text={errorText} className="mt-[2px]" />}
    </div>
  );
};
