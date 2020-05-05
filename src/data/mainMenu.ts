import { Menu } from '../models/Menu';
import { downloads } from './downloads';
import pkg from '../../package.json';

export const mainMenu: Menu.ItemType[] = [
  {
    name: 'Anasayfa',
    icon: {
      name: 'home',
      style: 'fas',
    },
    url: {
      href: '/',
      isInternal: true,
    },
  },
  {
    name: 'S.S.S.',
    icon: {
      name: 'question-circle',
      style: 'fas',
    },
    url: {
      href: '/blog/sikca-sorulan-sorular/',
      isInternal: true,
    },
  },
  {
    name: 'Blog',
    icon: {
      name: 'blog',
      style: 'fas',
    },
    items: [
      {
        name: 'Blog Anasayfa',
        url: {
          href: `/blog`,
          isInternal: true,
        },
        icon: {
          name: 'home',
          style: 'fas',
        },
      },
      {
        name: 'İçerik Ekle',
        url: {
          href: `${pkg.repository.url}/tree/master/content/blog`,
        },
        icon: {
          name: 'plus',
          style: 'fas',
        },
      },
      {
        name: 'Hata Bildir',
        url: {
          href: `${pkg.bugs.url}/new`,
        },
        icon: {
          name: 'bug',
          style: 'fas',
        },
      },
    ],
  },
  {
    name: 'İndir',
    icon: {
      name: 'download',
      style: 'fas',
    },
    items: downloads
      .filter((d) => d.url !== '')
      .map(({ fileName, sourceName, url }) => ({
        name: `${fileName} (${sourceName})`,
        url: {
          href: url,
        },
        icon: {
          name: 'compact-disc',
          style: 'fas',
        },
      })),
  },
];
