export interface ArticleData {
  title: string;
  sections?: Section[];
}

interface Section {
  subtitle: string;
  content: string;
}
