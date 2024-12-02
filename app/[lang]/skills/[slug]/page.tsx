import type { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";
import MarkdownIt from "markdown-it";
import markdownItLinkAttributes from "markdown-it-link-attributes";
import markdownItPrism from "markdown-it-prism";
import DOMPurify from "isomorphic-dompurify";
import { getArticle } from "@/lib/skills";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n.config";
import Link from "next/link";

import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";
import "@/app/styles/markdown.css";
import { getDictionary } from "@/dictionaries";

const publicId = "images/code";
const headline =
  "E-commerce projects and admin dashboards, integration with payment systems and more.";
const tagline = "Sergey Taydakov";
const phone = "+374 (95) 35-38-37";
const logoPublicId = "images/logo";

/**
 * Generates static route parameters for the `app/[lang]/skills/[slug]` route.
 *
 * @returns {Promise<Array<{ lang: Locale; slug: string }>>} An array of objects, each
 *          containing a `lang` key corresponding to a supported locale and a `slug`
 *          key corresponding to an article slug.
 */
export async function generateStaticParams() {
  const languages: Locale[] = ["en", "ru"];
  const params = languages.flatMap((lang) => {
    const articles = getArticle(lang);
    return articles.map((article) => ({
      lang,
      slug: article.slug,
    }));
  });

  return params;
}

/**
 * Generates metadata for a page based on the provided parameters.
 *
 * @param {Object} params - An object containing a promise that resolves to an object with `slug` and `lang`.
 * @param {Promise<{ slug: string; lang: Locale }>} params.params - A promise that resolves to the parameters for fetching the article.
 * @returns {Promise<Metadata>} A promise that resolves to the metadata object containing title, description, and open graph details.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const article = await fetchArticle(slug, lang);

  const baseUrl = "https://www.taydakov.com";
  return {
    title: `Portfolio | ${article?.title || "Skills"}`,
    description:
      article?.description
       ||
      "Full stack web developer. Experience building modern web applications using Next.js, React, Node.js and ORM (Prisma, Mongoose). Projects include e-commerce, admin panels, payment system integrations and others. Learn more about my skills and experience in web development.",
alternates: {
      canonical: `${baseUrl}/en/skills/${slug}`,
      languages: {
        en: `${baseUrl}/en/skills/${slug}`,
        ru: `${baseUrl}/ru/skills/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      images: [
        {
          width: 1200,
          height: 630,
          url: getCldOgImageUrl({
            src: publicId,
            effects: [
              {
                background: "rgb:0a0a0a",
              },
              {
                color: "rgb:2A005F",
                colorize: "100",
              },
              {
                gradientFade: "symmetric",
              },
            ],
            overlays: [
              {
                publicId,
                width: 1200,
                height: 630,
                crop: "fill",
                effects: [{ opacity: 30 }],
              },
              {
                width: 1000,
                crop: "fit",
                text: {
                  color: "white",
                  fontFamily: "Play",
                  fontSize: 58,
                  fontWeight: "bold",
                  lineSpacing: 10,

                  text: headline,
                },
                position: {
                  x: 100,
                  y: 100,
                  gravity: "north_west",
                },
              },
              {
                publicId,
                width: 1000,
                height: 2,
                effects: [
                  {
                    colorize: "100,co_white",
                    opacity: 70,
                  },
                ],
                position: {
                  x: 100,
                  y: 175,
                  gravity: "south_west",
                },
              },
              {
                width: 60,
                crop: "fit",
                publicId: logoPublicId,
                position: {
                  x: 100,
                  y: 92,
                  gravity: "south_west",
                },
              },
              {
                text: {
                  color: "white",
                  fontFamily: "Lato",
                  fontSize: 40,
                  fontWeight: "bold",
                  text: tagline,
                },
                position: {
                  x: 180,
                  y: 100,
                  gravity: "south_west",
                },
              },
              {
                text: {
                  color: "white",
                  fontFamily: "Lato",
                  fontSize: 40,
                  fontWeight: "bold",
                  text: phone,
                },
                position: {
                  x: 750,
                  y: 100,
                  gravity: "south_west",
                },
              },
            ],
          }),
        },
      ],
    },
  };
}

const md = new MarkdownIt()
  .use(markdownItLinkAttributes, {
    pattern: /^https?:\/\//,
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  })
  .use(markdownItPrism);

/**
 * Fetches a single article from the list of articles for the given language.
 * Returns `undefined` if no article with the given slug is found.
 *
 * @param {string} slug - The slug of the article to fetch.
 * @param {Locale} lang - The locale of the article to fetch.
 * @returns {Article | undefined} The article or `undefined` if no article with the given slug is found.
 */
async function fetchArticle(slug: string, lang: Locale) {
  const articles = getArticle(lang);
  return articles.find((article) => article.slug === slug);
}


/**
 * A Next.js page that renders a single article from the list of skills for the
 * given language. The page is optimized for SEO and accessibility.
 *
 * @param {Promise<{ slug: string; lang: Locale }>} params - The route parameters.
 * @returns {JSX.Element} The rendered page.
 */
export default async function SkillsPage({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const article = await fetchArticle(slug, lang);

  if (!article) {
    notFound();
  }

  const htmlContent = md.render(article.content);
  const {skills_page} = await getDictionary(lang);
  return (
    <div className="w-full max-w-[1920px] mx-auto relative">
      <article className="grow mt-20 md:mt-28 mb-10 text-white max-w-[1000px] px-[10px] mx-auto">
        <h1 className="title text-4xl pt-3 pb-1">{article.title}</h1>
        <hr />
        <div
          className="markdown text-lg "
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
        />
      </article>
      <div className="sticky bottom-5 ">
        <Link
          href={`/${lang}#skills`}
          className="primary_link absolute bottom-0 right-8 py-[5px] px-[20px] flex items-center justify-center "
        >
          {skills_page.button}
        </Link>
      </div>
    </div>
  );
}
