import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface Props {
  children: React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const PrimaryButton: React.FC<Props> = ({children,loading, type='button', className}) => {
  return (
    <button type={type} className={cn('primary_link py-[10px] px-[30px] flex items-center justify-center', className)}>
      {!loading ? children : <Loader className="w-5 h-5 animate-spin" />}
    </button>
  );
};

export default PrimaryButton;
