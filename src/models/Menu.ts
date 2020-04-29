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

  export interface ContactItem {
    name: string;
    url: string;
    icon: FAIcon.Icon;
    isFeatured: boolean;
  }

  export interface DownloadLink {
    fileName: string;
    sourceName: string;
    url: string;
  }
}
