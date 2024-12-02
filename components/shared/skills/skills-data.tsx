import { BsFillDatabaseFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiPuzzlePieceFill } from "react-icons/pi";

export const skills = [
  {
    title: "NEXTJS",
    icon: <RiNextjsFill />,
    slug: "nextjs",

    description: {
      en: "For sites with a lot of static content (like blogs or news sites), static generation in Next.js helps create fast and SEO-friendly pages, which reduces server load and speeds up site loading.",
      ru: "Для сайтов с большим количеством статического контента (например, блогов или новостных сайтов) статическая генерация в Next.js помогает создавать быстрые и SEO-дружественные страницы, что снижает нагрузку на сервер и ускоряет загрузку сайта.",
    },
  },
  {
    title: "REACTJS",
    icon: <FaReact />,
    slug: "reactjs",
    description: {
      en: "The main feature of React.js is the concept of virtual DOM (Document Object Model). Instead of directly interacting with the DOM, React uses the virtual DOM to improve performance.",
      ru: "Главной особенностью React.js является концепция виртуального DOM (Document Object Model). Вместо того чтобы напрямую взаимодействовать с DOM, React использует виртуальный DOM для повышения производительности.",
    },
  },
  {
    title: "TANSTACK QUERY",
    icon: <SiReactquery />,
    slug: "tanstack-query",
    description: {
      en: "TanStack Query (formerly known as React Query) is a popular library for managing server-side data. It simplifies the process of fetching, caching, synchronizing and updating data from the server, minimizing the manual work that you usually have to do when interacting with APIs.",
      ru: "TanStack Query (ранее известная как React Query) - это популярная библиотека для управления данными на стороне сервера. Она упрощает процесс получения, кэширования, синхронизации и обновления данных с сервера, сводя к минимуму ручную работу, которую обычно приходится выполнять при взаимодействии с API.",
    },
  },
  {
    title: "ORM SYSTEMS",
    icon: <BsFillDatabaseFill />,
    slug: "orm-systems",
    description: {
      en: "Working with databases plays a key role in modern web applications, and choosing the right tool to interact with them can greatly simplify a developer's life.",
      ru: "Работа с базами данных играет ключевую роль в современных веб-приложениях, и выбор правильного инструмента для взаимодействия с ними может значительно упростить жизнь разработчика.",
    },
  },
  {
    title: "ZUSTAND",
    icon: <PiPuzzlePieceFill />,
    slug: "zustand",
    description: {
      en: "One of the main features is the absence of complex configuration and template code. Creation and use of the storage is as simple as possible, which reduces development time.",
      ru: "Одна из главных особенностей - отсутствие сложного конфигурационного и шаблонного кода. Создание и использование хранилища максимально упрощено, что сокращает время разработки.",
    },
  },
  {
    title: "CLOUDINARY",
    icon: <SiCloudinary />,
    slug: "cloudinary",
    description: {
      en: "The platform provides convenient tools for uploading, storing and managing media files in the cloud. This eliminates the need to manage files manually on the server.",
      ru: "Платформа предоставляет удобные инструменты для загрузки, хранения и управления медиафайлами в облаке. Это избавляет от необходимости управлять файлами вручную на сервере.",
    },
  },

  {
    title: "TAILWINDCSS",
    icon: <RiTailwindCssFill />,
    slug: "tailwindcss",
    description: {
      en: "Instead of creating custom classes for each element, you can use Tailwind's utility classes right in the markup. This speeds up the development process and makes styles more predictable.",
      ru: "Вместо того чтобы создавать собственные классы для каждого элемента, вы можете использовать служебные классы Tailwind прямо в разметке. Это ускоряет процесс разработки и делает стили более предсказуемыми.",
    },
  },
  {
    title: "FRAMER MOTION",
    icon: <TbBrandFramerMotion />,
    slug: "framer-motion",
    description: {
      en: "The library supports animations with real physics, such as spring animations, and allows you to fine-tune the trajectory of elements. This helps to create more natural and realistic animations.",
      ru: "Библиотека поддерживает анимацию с реальной физикой, например, пружинную анимацию, и позволяет точно настроить траекторию движения элементов. Это помогает создавать более естественные и реалистичные анимации.",
    },
  },
];
