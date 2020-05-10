interface Window {
  __FLEXSEARCH__: {
    [lang: string]: {
      index: {
        name: string;
        attrs?: {
          [key: string]: string;
        };
        values: any;
      }[];
      store: {
        id: number;
        node: {
          title: string;
          slug: string;
        };
      }[];
    };
  };
}
