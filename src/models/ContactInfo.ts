import { FAIconStyle, FAIconSize } from "./FAIconTypes";

export interface ContactInfo {
  name: string;
  url: string;
  icon: {
    name: string;
    style: FAIconStyle;
    size?: FAIconSize;
  };
  isFeatured: boolean;
}
