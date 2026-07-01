import type { BlogPost } from '../types';
import { classicGamesPost } from './classic-games';
import { indieGamesPost } from './indie-games';
import { aaaGamesPost } from './aaa-games';
import { aiMusicPost } from './ai-music';
import { creativeToolsPost } from './creative-tools';
import { publisherNotesPost } from './publisher-notes';

export const blogPosts: BlogPost[] = [
  publisherNotesPost,
  creativeToolsPost,
  aiMusicPost,
  aaaGamesPost,
  indieGamesPost,
  classicGamesPost,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
