import { Icons } from "@/components/ui/icons";
import { ExternalLink, Link, ArchiveIcon } from "lucide-react";

export const PROJECTS = [
  {
    title: "Infinty - Sales and Marketing Automation",
    href: "https://infinity-saas.vercel.app/",
    dates: "2023",
    active: false,
    description:
      "Infinity is a platform built using Next.js, Node.js, and Express.js that acts like a cofounder by sending custom personalized emails to potential clients of a business. The project is designed to automate and enhance client outreach by tailoring email content based on business needs, ensuring better engagement and conversion rates",
    technologies: ["Typescript", "HTML", "TailwindCSS", "NextJS"],
    links: [
      {
        type: "Website",
        href: "https://infinity-saas.vercel.app/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/tomar-ayush/newinfinity",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/infinity.png",
    video: "",
  },
  {
    title: "flex-it-out - AI Powered Exercising Platform",
    href: "https://flexitout1.vercel.app/",
    dates: "Oct 2024 - Present",
    active: false,
    description:
      "Flex It Out is an innovative platform designed to engage users in daily challenges, rewarding their achievements and fostering a vibrant community. Leveraging advanced AI pose detection using TensorFlow.js, the platform offers an interactive and immersive user experience.",
    technologies: ["tensorflow/pose-detection", "Typescript", "Nextjs", "Mongo DB"],
    links: [
      {
        type: "Website",
        href: "https://flexitout1.vercel.app/",
        icon: <Icons.globe className="h-3 w-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/tomar-ayush/flex-it-ou",
        icon: <Icons.github className="h-3 w-3" />,
      },
    ],
    image: "/projects/flex-it-out.png",
    video: "",
  },
];

export const FREELANCE_PROJECTS = [
  // {
  //   title: "Crownworld",
  //   role: "Developer",
  //   dates: "2023",
  //   location: "Remote",
  //   description: "ReactJS website Styled with Material UI",
  //   image: "/images/professional/crownworld.jpeg",
  //   mlh: "#",
  //   archive: false,

  //   links: [
  //     {
  //       title: "Website",
  //       href: "https://crownworld.io",
  //       icon: <Link className="h-3 w-3" />,
  //     },
  //     // {
  //     //   title: "Proof",
  //     //   href: "#",
  //     //   icon: <ExternalLink className="h-3 w-3" />,
  //     // },
  //   ],
  // }
];
