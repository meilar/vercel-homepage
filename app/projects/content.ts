import ReactMarkdown from "react-markdown";
import { robogerMd } from "./content-text";
import { ReactElement } from "react";

export type Project = {
  name: string;
  summary: string;
  date: Date;
  image: string;
  imgAlt: string;
  href: string;
  repoUrl?: string;
  style: string;
  keywords: string[];
};

export const projects: Project[] = [
  {
    name: "Mr. Roboger's Neighborhood",
    summary: robogerMd,
    date: new Date(2022, 3),
    image: "/roboger.jpeg",
    imgAlt: "Screenshot of project",
    href: "",
    repoUrl: "https://github.com/meilar/robot-song",
    style: "",
    keywords: ["javascript"],
  },
];
