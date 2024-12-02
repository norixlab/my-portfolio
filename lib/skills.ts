import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from '@/i18n.config';

const postsDirectory = path.join(process.cwd(), 'articles');

/**
 * Reads all article files in the specified language and returns an array of
 * objects, each containing the slug, content, and title of an article.
 *
 * @param {Locale} lang - The language to read articles from.
 * @returns {Array<{slug: string, content: string, title: string}>} An array of
 * articles, where each article is an object with a slug, content, and title.
 */
export function getArticle(lang: Locale) {
  const localeDirectory = path.join(postsDirectory, lang);
  const fileNames = fs.readdirSync(localeDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(localeDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
    };
  });
}
