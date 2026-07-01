import type { Lang } from '../../i18n/utils';

export type BlogCategory =
  | 'games'
  | 'music'
  | 'technology'
  | 'publisher';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPostContent {
  title: string;
  description: string;
  excerpt: string;
  sections: BlogSection[];
}

export interface BlogPost {
  slug: string;
  date: string;
  category: BlogCategory;
  showGameCatalog?: 'classic' | 'indie' | 'aaa' | 'all';
  en: BlogPostContent;
  es: BlogPostContent;
}

export function getPostContent(post: BlogPost, lang: Lang): BlogPostContent {
  return post[lang];
}

export function getCategoryLabel(category: BlogCategory, lang: Lang): string {
  const labels: Record<BlogCategory, Record<Lang, string>> = {
    games: { en: 'Games', es: 'Juegos' },
    music: { en: 'Music', es: 'Música' },
    technology: { en: 'Technology', es: 'Tecnología' },
    publisher: { en: 'Publisher', es: 'Publisher' },
  };
  return labels[category][lang];
}
