import { FAIcon } from './FAIcon';

export declare namespace Menu {
  export interface IMenuItem {
    [key: string]: any;
    name: string;
    icon: FAIcon.Icon;
  }

  export interface ItemRegular extends IMenuItem {
    url: {
      href: string;
      isInternal?: boolean;
    };
  }

  export interface ItemDropdown extends IMenuItem {
    items?: ItemRegular[];
  }

  export type ItemType = ItemRegular | ItemDropdown;
}
