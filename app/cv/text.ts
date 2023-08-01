export type Skill = {
  title: string;
  bullet: string[];
  type: SkillType;
};

export enum SkillType {
  General,
  Languages,
  People,
  Tools,
}

export type Position = {
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  bullets: string[];
};

export type Job = {
  name: string;
  logoUrl: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  positions: Position[];
};

export type Education = {
  name: string;
  logoUrl: string;
  description: string;
  completion: Date;
  bullets: string[];
};

export const skills: Skill[] = [
  {
    title: "People Skills",
    bullet: [
      "Polished writing skills, experienced drafting copy and communications for high-visibilty channels",
      "Mentorship, training, and process implementation",
      "High EQ developed through experience providing empathetic service to a diverse group of customers, clients, and stakeholders",
      "Experience developing team evaluation metrics, translating desired outcomes into performance indicators",
    ],
    type: SkillType.People,
  },
  {
    title: "Development Tools",
    bullet: [
      "Use Github and Git CLI to manage version control",
      "Understanding of test-driven development principles",
      "Implement automatic unit testing with tools like Jest, MSTest, and Github Actions",
      "VS Code (including Live Share), Atom, Chrome Developer Tools, MySql Workbench, Postman, Linux, Xcode, Beekeeper",
    ],
    type: SkillType.Tools,
  },
];

export const workHistory = [
  {
    name: "itOS",
    logoUrl: "/itos.jpeg",
    startDate: new Date(2022, 7),
    endDate: undefined,
    positions: [
      {
        title: "Junior Software Developer",
        startDate: new Date(2022, 7),
        endDate: undefined,
        bullets: [
          "Contributed to alpha version of a new SaaS web application written in TypeScript with a Material UI + React + Next.js + Postres stack",
          "True full-stack development, independently handling front-end and back-end tasks under the guidance of the project's CTO",
          "Created new pages, React components, and REST API endpoints",
        ],
      },
    ],
  },
  {
    name: "Portland Baroque Orchestra",
    logoUrl: "/pbo.png",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 11),
    positions: [
      {
        title: "Associate Producer of Digital Content",
        startDate: new Date(2020, 3),
        endDate: new Date(2021, 11),
        bullets: [
          "Executed a pivot from all in-person concerts to all digital concerts during 2020-21 Season",
          "Opened a dedicated livestream studio",
          "Associate Producer and Editor for 12 digital concerts for PBO and other music organizations",
        ],
      },
      {
        title: "Patron Services & Donor Relations Manager",
        startDate: new Date(2017, 7),
        endDate: new Date(2020, 3),
        bullets: [
          "Executed a pivot from all in-person concerts to all digital concerts during 2020-21 Season",
          "Opened a dedicated livestream studio",
          "Associate Producer and Editor for 12 digital concerts for PBO and other music organizations",
        ],
      },
    ],
  },
];

export const educationHistory = [
  {
    name: "Epicodus",
    logoUrl: "/epicodus.png",
    description: "Full-Stack Developer Training (C#/.Net/React)",
    completion: new Date(2022, 8),
    bullets: [
      "Full time, 26-week, 40-hours/week training program",
      "Progressed from creating static HTML/CSS/JS websites to dynamic sites in Node.js to full- stack (MySql + .Net Core + React.js) webapps",
      "Built over 70 projects, all available to view on Github",
    ],
  },
  {
    name: "Reed College",
    logoUrl: "/reed.png",
    description: "B.A. Music",
    completion: new Date(2013, 5),
    bullets: [
      "Music coursework in history, music composition, 20th Century Modernism, Minimalism, and Music of the Civil Rights Movement",
      "Other coursework in Spanish language, French language, Chinese humanities, and poetry",
    ],
  },
];
