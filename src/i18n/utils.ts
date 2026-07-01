export type Lang = 'en' | 'es';

export const languages: Lang[] = ['en', 'es'];
export const defaultLang: Lang = 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}

export function alternateLinks(path: string, site: string) {
  const clean = path === '/' ? '' : path;
  return languages.map((lang) => ({
    lang,
    href: `${site}/${lang}${clean}${clean && !clean.endsWith('/') ? '' : clean === '' ? '/' : ''}`,
  }));
}

export function pageAlternates(slug: string, site: string) {
  const base = site.replace(/\/$/, '');
  const segment = slug ? `/${slug.replace(/^\//, '')}` : '';
  const suffix = segment ? `${segment}/` : '/';
  return [
    { lang: 'en', href: `${base}/en${suffix}` },
    { lang: 'es', href: `${base}/es${suffix}` },
    { lang: 'x-default', href: `${base}/en${suffix}` },
  ];
}
