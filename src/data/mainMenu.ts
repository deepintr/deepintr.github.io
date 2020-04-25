import { MenuItemType } from "../models/MenuItem";
import { downloads } from "./downloads";
import pkg from "../../package.json";

export const mainMenu: MenuItemType[] = [
  {
    name: "Anasayfa",
    icon: {
      name: "home",
      style: "fas",
    },
    url: "/",
  },
  {
    name: "Blog",
    icon: {
      name: "blog",
      style: "fas",
    },
    items: [
      {
        name: "İçerik Ekle",
        url: `${pkg.repository.url}/tree/master/content/blog`,
        icon: {
          name: "plus",
          style: "fas",
        },
      },
      {
        name: "Hata Bildir",
        url: `${pkg.bugs.url}/new`,
        icon: {
          name: "bug",
          style: "fas",
        },
      },
    ],
  },
  {
    name: "İndir",
    icon: {
      name: "download",
      style: "fas",
    },
    items: downloads
      .filter((d) => d.url !== "")
      .map(({ fileName, sourceName, url }) => ({
        name: `${fileName} (${sourceName})`,
        url,
        icon: {
          name: "compact-disc",
          style: "fas",
        },
      })),
  },
];
