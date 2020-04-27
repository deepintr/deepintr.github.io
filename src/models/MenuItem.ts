import { Icon } from './FAIconTypes';

export interface IMenuItem {
  [key: string]: any;
  name: string;
  icon: Icon;
}

export interface MenuItemRegular extends IMenuItem {
  url: string;
}

export interface MenuItemDropdown extends IMenuItem {
  items?: MenuItemRegular[];
}

export type MenuItemType = MenuItemRegular | MenuItemDropdown;
