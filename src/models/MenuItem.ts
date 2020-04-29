import { FAIcon } from './FAIcon';

export interface IMenuItem {
  [key: string]: any;
  name: string;
  icon: FAIcon.Icon;
}

export interface MenuItemRegular extends IMenuItem {
  url: {
    href: string;
    isInternal?: boolean;
  };
}

export interface MenuItemDropdown extends IMenuItem {
  items?: MenuItemRegular[];
}

export type MenuItemType = MenuItemRegular | MenuItemDropdown;
