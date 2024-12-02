import type { Metadata } from "next";
import { Play } from "next/font/google";
import { getCldOgImageUrl } from "next-cloudinary";
import { Footer, Header } from "@/components/shared";
import "../styles/globals.css";
import { i18n, Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const publicId = "images/code";
const headline =
  "E-commerce projects and admin dashboards, integration with payment systems and more.";
const tagline = "Sergey Taydakov";
const phone = "+374 (95) 35-38-37";
const logoPublicId = "images/logo";

export const metadata: Metadata = {
  title: "Portfolio - Sergey Taydakov",
  description:
    "Full stack web developer. Experience building modern web applications using Next.js, React, Node.js and ORM (Prisma, Mongoose). Projects include e-commerce, admin panels, payment system integrations and others. Learn more about my skills and experience in web development.",
    alternates: {
      canonical: "https://www.taydakov.com/en",
      languages: {
        en: "https://www.taydakov.com/en",
        ru: "https://www.taydakov.com/ru",
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

/**
 * Generates static parameters for locales.
 *
 * @returns {Promise<Array<{ lang: Locale }>>} An array of objects, each containing a `lang` key corresponding to a locale.
 */
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

/**
 * The RootLayout component is responsible for rendering the root layout of the application.
 * It sets the HTML language attribute based on the current locale and wraps the children
 * components with a consistent header and footer. The body is styled with a background,
 * text color, and layout properties.
 *
 * @param {Object} props - The properties for the RootLayout component.
 * @param {React.ReactNode} props.children - The children components to be rendered within the layout.
 * @param {Promise<{ lang: Locale }>} props.params - A promise that resolves to an object containing the locale.
 * @returns {JSX.Element} - The root layout element with the appropriate localization and styling.
 */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const locale = (await params).lang;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${play.className} flex flex-col min-h-screen bg-background text-[#e5e7eb] overflow-x-hidden`}
      >
        <Header locale={locale} translation={dictionary.header} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
