export type FAIconStyle = "fas" | "fab";

export type FAIconSize = "lg" | "2x" | "3x";

export interface Icon {
  name: string;
  style: FAIconStyle;
  size?: FAIconSize;
}
