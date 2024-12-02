"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale } from "@/i18n.config";
import Image from "next/image";
import enFlag from "@/public/us.svg";
import ruFlag from "@/public/ru.svg";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";
import { cn } from "@/lib/utils";
import { IoLanguage } from "react-icons/io5";
import { set } from "react-hook-form";
import { X } from "lucide-react";

interface LocaleSwitcherProps {
  translation: { [key: string]: string };
  className?: string;
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  translation,
  className,
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpenLang] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setIsOpenLang(false);
  });

  /**
   * Returns a redirect path based on the current pathname and the provided locale.
   * If the current pathname is falsy, returns "/"
   * @param locale - locale to redirect to
   * @returns redirect path
   */
  const getRedirectPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const hash = window.location.hash;
    const segments = pathname.split("/");
    segments[1] = locale;
    return `${segments.join("/")}${hash}`;
  };

  const handleChangeLocale = () => {
    setIsOpenLang(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label={translation.aria_language_switcher}
        onClick={() => setIsOpenLang(!isOpen)}
        className=" group "
      >
        <IoLanguage
          size={25}
          className="group-hover:text-primary transition-colors"
        />
      </button>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={cn("absolute top-[54px] ", className)}
        >
          <ul className="relative flex flex-col gap-1 bg-[#1f242d] text-white p-2 pr-4 pt-4 rounded-lg border border-primary/50 shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
            <button
              type="button"
              onClick={() => setIsOpenLang(false)}
              className="absolute top-1 right-1 group"
            >
              <X size={12} className="group-hover:text-primary" />
            </button>
            <li
              className={cn(
                "px-2 py-1 rounded-lg hover:bg-zinc-700 border-b border-transparent hover:border-primary transition-colors",
                {
                  "border-b border-primary bg-zinc-700":
                    pathname.startsWith("/en"),
                }
              )}
            >
              <Link
                onClick={handleChangeLocale}
                href={getRedirectPathname("en")}
                className="flex items-center gap-2 font-medium text-base "
              >
                <Image
                  src={enFlag}
                  width={30}
                  height={22}
                  alt="en"
                  className="rounded-[3px]"
                />
                English
              </Link>
            </li>
            <li
              className={cn(
                " px-2 py-1 rounded-lg hover:bg-zinc-700 border-b border-transparent hover:border-primary transition-colors",
                {
                  "border-b border-primary bg-zinc-700":
                    pathname.startsWith("/ru"),
                }
              )}
            >
              <Link
                onClick={handleChangeLocale}
                href={getRedirectPathname("ru")}
                className="flex items-center gap-2 font-medium text-base "
              >
                <Image
                  src={ruFlag}
                  width={30}
                  height={22}
                  alt="ru"
                  className="rounded-[3px] "
                />
                <span>Русский</span>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default LocaleSwitcher;
