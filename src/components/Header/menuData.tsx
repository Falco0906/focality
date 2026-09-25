import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    newTab: false,
    submenu: [
      { id: 11, title: "Loqi", path: "https://www.tryloqi.com/", newTab: true },
      { id: 12, title: "Custom automations", path: "/contact", newTab: false },
      { id: 13, title: "Coming soon", newTab: false },
    ],
  },
  { id: 2, title: "About", path: "/about", newTab: false },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  { id: 4, title: "Contact", path: "/contact", newTab: false },
];
export default menuData;
