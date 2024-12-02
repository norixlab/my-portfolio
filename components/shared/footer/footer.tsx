import { TbChevronsUp } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import logoSt from "@/public/logo-st.png";

/**
 * The footer component
 *
 * @returns The footer of the page
 * @example
 * <Footer />
 */
export const Footer = () => {
  return (
    <footer className="bg-[#1f242d] text-white z-[60]  border-t border-primary mt-5">
      <div className="max-w-[1920px]  px-[20px] mx-auto">
        <div className="flex justify-center items-center  py-6">
          <div className=" text-sm  text-[#e5e7eb] flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()}</span>{" "}
            <Image
              src={logoSt}
              width={50}
              height={50}
              alt=""
              className="w-[25px] h-[25px] ml-1"
            />
            <span>Portfolio. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
