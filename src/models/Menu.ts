import { FAIcon } from './FAIcon';
import { Linkable } from './Linkable';

export declare namespace Menu {
  export interface IMenuItem {
    [key: string]: any;
    name: string;
    icon: FAIcon.Icon;
  }

  export interface ItemRegular extends IMenuItem {
    url: Linkable;
  }

  export interface ItemDropdown extends IMenuItem {
    items?: ItemRegular[];
  }

  export type ItemType = ItemRegular | ItemDropdown;

  export interface ContactItem extends ItemRegular {
    isFeatured?: boolean;
  }

  export interface NavLink {
    name: string;
    url: Linkable;
  }

  export interface DownloadLink {
    fileName: string;
    sourceName: string;
    url: string;
  }
}
