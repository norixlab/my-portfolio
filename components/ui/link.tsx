import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
  ariaLabel?: string;
  className?: string;
}
const PrimaryLink: React.FC<Props> = ({name, href,ariaLabel, className}) => {
  return (
    <Link aria-label={ariaLabel}  href={href} className={cn('primary_link py-[10px] px-[30px]', className)}>
      {name}
    </Link>
  );
};

export default PrimaryLink;
