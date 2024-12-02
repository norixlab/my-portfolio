import React from "react";
import { cn } from "@/lib/utils";

type SkillsDetail = {
  title: string;
  percent: number;
};
interface Props {
  title: string;
  type?: "left" | "right";
  className?: string;
  skills: SkillsDetail[];
}

/**
 * A component that displays a list of skills with their respective progress percentages.
 * Each skill is represented with a title and a progress bar indicating the completion percentage.
 *
 * @param {Props} props - The props for the component.
 * @param {string} props.title - The title of the skills section.
 * @param {SkillsDetail[]} props.skills - An array of skills, each containing a title and a percentage.
 * @param {"left" | "right"} [props.type="left"] - Determines the style of the border and background.
 * @param {string} [props.className] - Additional class names for custom styling.
 */
export const SkillsDetails: React.FC<Props> = ({
  title,
  skills,
  type = "left",
  className,
}) => {
  return (
    <div className={cn(" w-full space-y-2", className)}>
      <h4 className="text-[22px] md:h-[88px] lg:h-auto sm:text-2xl py-3 text-zinc-300 uppercase font-semibold text-center">
        {title}
      </h4>
      <div
        className={cn("relative rounded-[20px]", {
          customBorder: type === "left",
          customBorderRight: type === "right",
        })}
      >
        <div
          className={cn("p-5", {
            bgBlock: type === "left",
            bgBlockRight: type === "right",
          })}
        >
          {skills.map((item) => (
            <div key={item.title} className="py-2">
              <h3 className="text-xl flex justify-between">
                {item.title}
                <span
                  className={cn("text-primary", {
                    "text-orange-500": item.percent < 50,
                    "text-red-500": item.percent < 20,
                  })}
                >
                  {item.percent}%
                </span>
              </h3>
              <div className="h-5 rounded-[8px] border-[2px] border-primary p-1 my-1 ">
                <span
                  style={{ width: `${item.percent}%` }}
                  className="block h-full rounded-[3px] bg-primary"
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
