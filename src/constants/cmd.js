export const actions = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
    color: "#EC605A",
    iconColor: "#5D0F07",
  },
  {
    name: "Writing",
    keywords: "blogs",
    href: "/blogs",
    section: "Navigation",
    color: "#F7D358",
    iconColor: "#673D13",
  },
  {
    name: "GitHub",
    keywords: "github",
    href: "https://github.com/tomar-ayush",
    section: "Socials",
    color: "#61C167",
    iconColor: "#0D2805",
  },
  /*
  {
    name: "Contact",
    keywords: "contact",
    href: "https://wa.me/919816328430",
    section: "Socials",
    color: "#63C7FA",
    iconColor: "#102E62",
  },
  */
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#5C0E63",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
    color: "#EC79F9",
    iconColor: "#5C0E63",
  },
];

export const Navigation = [
  {
    name: "Home",
    keywords: "home",
    href: "/",
    section: "Navigation",
  },
  {
    name: "Blogs",
    keywords: "blogs",
    href: "/blogs",
    section: "Navigation",
  },
];

export const Socials = [
  {
    name: "GitHub",
    keywords: "github",
    perform: () => {
      window.open("https://github.com/tomar-ayush");
    },
    section: "Socials",
  },
  {
    name: "Twitter",
    keywords: "twitter",
    perform: () => {
      window.open("https://x.com/_ayushtomar");
    },
    section: "Socials",
  },
];

export const Themes = [
  {
    name: "Light",
    keywords: "light",
    section: "Themes",
  },
  {
    name: "Dark",
    keywords: "dark",
    section: "Themes",
  },
  {
    name: "System",
    keywords: "system",
    section: "Themes",
  },
];
