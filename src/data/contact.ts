import { Menu } from '../models';

export const contact: Menu.ContactItem[] = [
  {
    name: 'Telegram',
    icon: {
      name: 'telegram',
      style: 'fab',
      size: 'lg',
    },
    url: {
      href: 'https://t.me/deepintr',
    },
    isFeatured: true,
  },
  {
    name: 'GitHub',
    icon: {
      name: 'github',
      style: 'fab',
      size: 'lg',
    },
    url: {
      href: 'https://github.com/deepintr',
    },
    isFeatured: true,
  },
  {
    name: 'DistroWatch',
    icon: {
      name: 'linux',
      style: 'fab',
      size: 'lg',
    },
    url: {
      href: 'https://distrowatch.com/table.php?distribution=deepin',
    },
  },
  {
    name: 'LinkedIn',
    icon: {
      name: 'linkedin',
      style: 'fab',
      size: 'lg',
    },
    url: {
      href: 'https://tr.linkedin.com/company/deepinturkey',
    },
  },
  {
    name: 'YouTube',
    icon: {
      name: 'youtube',
      style: 'fab',
      size: 'lg',
    },
    url: {
      href: 'https://www.youtube.com/channel/UCvd1FPyxqwveRB50tOtbAGQ',
    },
  },
];
