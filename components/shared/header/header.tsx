"use client";
import React from "react";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { links } from "./header-links";
import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "@/components/ui/locale-switcher";
import { MobileMenuBtn } from "@/components/ui/mobile-menu-btn";
import { useClickAway } from "react-use";

interface HeaderProps {
  locale: Locale;
  translation: { [key: string]: string };
}
/**
 * The main header component, containing the logo, navigation links, and
 * language switcher.
 *
 * The component is a fixed position header with a white background and
 * a black border at the bottom. The logo is a link to the homepage and is
 * positioned at the top left. The navigation links are displayed as a
 * vertical list on mobile devices and as a horizontal list on larger
 * screens. The links are styled as buttons with a white background and a
 * black border. The active link has a black background and white text.
 *
 * The language switcher is a dropdown menu positioned at the top right.
 * It is hidden on mobile devices and displayed as a button with a white
 * background and a black border on larger screens.
 *
 * @param {{ locale: Locale }} props - The locale of the current page.
 * @returns {JSX.Element} The header component.
 */
export const Header: React.FC<HeaderProps> = ({translation, locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [activeLink, setActiveLink] = React.useState<string>("home");
  const sectionRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});
  const mobMenuRef = React.useRef(null);
  useClickAway(mobMenuRef, () => {
    setIsOpen(false);
  });

  React.useEffect(() => {
    const parts = pathname.split("/");
    const hashOrSection = parts[2]?.split("#")[1] || parts[2];
    if (hashOrSection && links.some((link) => link.url === hashOrSection)) {
      setActiveLink(hashOrSection);
    }
  }, [pathname]);

  const observeSections = React.useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.url);
      if (section) {
        sectionRefs.current[link.url] = section;
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  React.useEffect(() => {
    const disconnectObserver = observeSections();

    return () => {
      disconnectObserver();
    };
  }, [observeSections, pathname]);

/**
 * Handles click events for navigation links.
 *
 * Sets the active link to the given URL and closes the mobile menu.
 *
 * @param {string} url - The URL of the link that was clicked.
 */
  const handleClick = (url: string) => {
    setActiveLink(url);
    setIsOpen(false);
  };

  return (
    <header className="fixed  top-0 left-0 w-[100vw] py-4 bg-[#1f242d] text-white z-[60]  border-b border-primary">
      <div className="max-w-[1440px] px-[20px] mx-auto ">
        <div className="flex justify-between items-center w-full relative">
          <div className="">
            <Link
            aria-label={translation.aria_logo}
              className="logo relative flex items-center gap-2 text-[25px] font-semibold z-10"
              href="/"
            >
              Portfolio
            </Link>
          </div>

          <nav
            
            className={cn(
              "w-full absolute top-[54px] left-[150%] lg:left-0 lg:top-0 lg:border-none duration-300 lg:relative bg-[#1f242d] lg:bg-transparent border-l-[2px] border-b-[2px] rounded-bl-lg p-4 pt-0 lg:p-0",
              {
                "left-1/2": isOpen,
              }
            )}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-10 w-full">
              {links.map((link) => (
                <li key={link.url} className="">
                  <Link
                    aria-label={link[locale].title}
                    onClick={() => handleClick(link.url)}
                    className={cn(
                      ` h-[50px] text-[18px] relative flex items-center font-medium capitalize link transition-all  `,
                      {
                        active: activeLink === link.url,
                      }
                    )}
                    href={`/${locale}#${link.url}`}
                  >
                    {link[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end lg:w-[100px] gap-3">
            <LocaleSwitcher translation={translation} />
            <MobileMenuBtn translation={translation} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};
