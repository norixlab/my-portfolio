import {
  About,
  Contacts,
  Hero,
  ProgressBar,
  Projects,
  Resources,
  Skills,
  ToTop,
} from "@/components/shared";
import { Locale } from "@/i18n.config";

import Image from "next/image";
import decorLeft from "@/public/decor-left.svg";
import decorRight from "@/public/decor-right.svg";
import { getDictionary } from "@/dictionaries";

/**
 * The main page of the website, containing all the sections.
 * The component renders a `main` element with a class of `flex-grow` and
 * a `div` element with a class of `max-w-[1920px] mx-auto relative`.
 * The `div` element contains a `ProgressBar` component, and a `div` element with
 * a class of `overflow-hidden`. The latter contains a series of `section` elements
 * with ids of "home", "about", "skills", "resources", "projects", and "contacts".
 * Each section contains the corresponding component, as well as a decorative
 * image at the top-right and top-left of the section for the "home" and "about"
 * sections, respectively. The `ToTop` component is also rendered at the bottom of
 * the page.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const locale = (await params).lang;
  const dictionary = await getDictionary(locale);
  return (
    <main className="flex-grow ">
      <div className="max-w-[1920px]   mx-auto relative">
        <ProgressBar />
        <div className="overflow-hidden">
          <section id="home" className="relative pb-0">
            <Image
              src={decorRight}
              alt="decor"
              width={500}
              height={600}
              className="decor_main_right"
            />
            <Hero locale={locale} translation={dictionary.hero} />
          </section>

          <section id="about" className="relative pt-0 lg:pt-20">
            <Image
              src={decorLeft}
              alt="decor"
              width={500}
              height={600}
              className="decor_main_left"
            />
            <About translation={dictionary.about} />
          </section>

          <section id="skills" >
            <Skills locale={locale} translation={dictionary.skills} />
          </section>

          <section id="resources">
            <Resources translation={dictionary.resources} />
          </section>

          <section id="projects">
            <Projects
              locale={locale}
              translation={dictionary.recent_projects}
            />
          </section>

          <section id="contacts" className="mb-0">
            <Contacts translation={dictionary.contacts} />
          </section>
        </div>
        <ToTop />
      </div>
    </main>
  );
}
