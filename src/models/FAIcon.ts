export declare namespace FAIcon {
  export type Style = 'fas' | 'fab';

  export type Size = 'lg' | '2x' | '3x';

  export interface Icon {
    name: string;
    style: Style;
    size?: Size;
  }
}
