import { cn } from "@/lib/utils";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

interface Props {
  className?: string;
}

/**
 * A component that renders a list of social media links.
 *
 * This component displays links to various social media platforms with their respective icons.
 * Each link opens in a new tab and includes accessible labels for screen readers.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.className] - An optional class name to style the container.
 *
 * @returns {JSX.Element} A JSX element containing a list of social media links.
 */
export const SocialLinks: React.FC<Props> = ({ className }) => {
  const socialLink = [
    {
      path: "https://www.instagram.com/norixlab/",
      aria_label: "Instagram",
      icon: <AiFillInstagram size={22} />,
    },
    {
      path: "https://github.com/norixlab",
      aria_label: "Github",
      icon: <AiOutlineGithub size={22} />,
    },
    {
      path: "https://wa.me/message/W7TW3RZT2NESN1",
      aria_label: "WhatsApp",
      icon: <SiWhatsapp size={22} />,
    },
    {
      path: "https://t.me/norixlab",
      aria_label: "Telegram",
      icon: <BiLogoTelegram size={24} className="pr-[2px]" />,
    },
  ];
  return (
    <div className={cn("", className)}>
      <ul className="flex items-center mb-[50px] gap-[15px]">
        {socialLink.map((item, index) => (
          <li key={index}>
            <Link
              aria-label={item.aria_label}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-[40px] h-[40px] flex items-center justify-center bg-transparent border-[2px] border-primary rounded-[50%] text-primary transition-all ease-in-out hover:bg-primary hover:text-black hover:shadow-[0_0_10px_rgb(171,236,61)]"
              href={item.path}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
