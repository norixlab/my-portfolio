import aJourney from "@/public/a-journey.png";
import bonMari from "@/public/bonmari-desk.png";
import norixlab from "@/public/norix.png";
export const projects = [
  {
    title: { en: "Online Shop", ru: "Интернет-магазин" },

    description: {
      en: "Online store of Czech pastry store BonMari",
      ru: "Интернет-магазин чешского кондитерского магазина BonMari",
    },

    alt: "Online Shop",
    imageUrl: bonMari,
    link: "https://www.bonmari.cz/",
  },
  {
    title: { en: "Website Aggregator", ru: "Сайт-агрегатор" },

    description: {
      en: "Site for comfortable organization of travels, excursions and in Armenia (in the process of development)",
      ru: "Сайт для комфортной организации путешествий, экскурсий и в Армении  (в процессе разработки)",
    },

    alt: "Armenia Journey",
    imageUrl: aJourney,
    link: "#",
  },
  {
    title: { en: "Corporate website", ru: "Корпоративный сайт" },

    description: {
      en: "Website of IT company (in the process of development)",
      ru: "Сайт IT компании (в процессе разработки)",
    },

    alt: "Project",
    imageUrl: norixlab,
    link: "#",
  },
];
