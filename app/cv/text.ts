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
  Concepts,
  Web,
  Deployment,
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
    title: "Writing",
    bullet: [
      "Experienced drafting copy and communications for high-visibilty channels",
    ],
    type: SkillType.General,
  },
  {
    title: "Mentorship",
    bullet: [
      "Contributes and provides guidance for the growth of people on my teams",
      "Experienced and trained mentor for youth services programs",
    ],
    type: SkillType.People,
  },
  {
    title: "Training",
    bullet: [
      "Developed experience as a trainer delivering basic workplace training",
      "Responsible for delivering and assessing volunteer training",
    ],
    type: SkillType.People,
  },
  {
    title: "Assessment and Process Improvement",
    bullet: [
      "Trained in qualitative assessment methods",
      "Experience defining KPIs, designing assessments to fit outcome measurements, processing survey data, and sythesizing process improvement recommendations",
    ],
    type: SkillType.General,
  },
  {
    title: "Culturally Responsive Customer Service",
    bullet: [
      "High EQ developed through experience providing empathetic service to a diverse group of customers, clients, and stakeholders",
    ],
    type: SkillType.People,
  },
  {
    title: "VS Code",
    bullet: ["VS Code (including Live Share)"],
    type: SkillType.Tools,
  },
  {
    title: "Postman",
    bullet: [
      "VS Code (including Live Share), Atom, Chrome Developer Tools, MySql Workbench, Postman, Linux, Xcode, Beekeeper",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Chrome Developer Tools",
    bullet: ["Chrome Developer Tools"],
    type: SkillType.Tools,
  },
  {
    title: "Xcode",
    bullet: ["Xcode"],
    type: SkillType.Tools,
  },
  {
    title: "Git/Github",
    bullet: ["Use Github and Git CLI to manage version control"],
    type: SkillType.Tools,
  },
  {
    title: "Beekeeper/MySQL Workbench",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Tools,
  },

  {
    title: "Version Control",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Concepts,
  },
  {
    title: "Test-Driven Development",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Concepts,
  },
  {
    title: "JavaScript/Typescript",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Languages,
  },
  {
    title: "C#/.NET",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Languages,
  },
  {
    title: "Swift",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Languages,
  },
  {
    title: "Shell Scripting",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Languages,
  },
  {
    title: "Programming Fundamentals",
    bullet: [
      "Manipulate building blocks of code, including variables, functions, loops, control structures, and branching logic",
      "Compare constraints and advantages of different programming paradigms, including declarative, imperative, functional, and object-oriented",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Design Patterns",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Concepts,
  },
  {
    title: "API Design",
    bullet: ["Use software to inspect and make database queries"],
    type: SkillType.Concepts,
  },
  {
    title: "Programming Paradigms",
    bullet: [
      "Compare constraints and advantages of different programming paradigms, including declarative, imperative, functional, and object-oriented",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Problem Solving",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "HTML",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "CSS",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "DOM Manipulation",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "React",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "Bootstrap",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "Tailwind",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Web,
  },
  {
    title: "State Management",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Code-first Database Management",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Linux",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Deployment,
  },
  {
    title: "OAuth",
    bullet: [
      "Learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Deployment,
  },
];

export const workHistory = [
  {
    name: "itOS",
    logoUrl: "/itos.jpeg",
    startDate: new Date(2022, 7),
    endDate: new Date(2023, 7, 31),
    positions: [
      {
        title: "Junior Software Developer",
        startDate: new Date(2022, 7),
        endDate: new Date(2023, 7, 31),
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
  {
    name: "Boys & Girls Clubs of Portland",
    logoUrl: "/bgcp.jpeg",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 11),
    positions: [
      {
        title: "Program Operations Coordinator",
        startDate: new Date(2016, 11),
        endDate: new Date(2017, 6),
        bullets: [
          "Stewarded program quality initiatives, grant writing and reporting, and fundraising events",
          "Hired and onboarded program staff",
          "Participated in an organization-wide DEI process led by Center for Equity and Inclusion",
        ],
      },
      {
        title: "Coordinator of Membership and Family Engagement",
        startDate: new Date(2014, 8),
        endDate: new Date(2016, 11),
        bullets: [
          "Developed and led art, music, computer, and cooking after-school and summer programs in East Portland and Camas, WA",
          "Managed member registration, and payment systems",
          "Launched an annual art show fundraiser",
        ],
      },
      {
        title: "Youth Development Professional",
        startDate: new Date(2013, 8),
        endDate: new Date(2014, 8),
        bullets: [
          "Developed and led art, music, computer, and cooking after-school and summer programs in East Portland and Camas, WA",
          "Managed member registration, and payment systems",
          "Launched an annual art show fundraiser",
        ],
      },
    ],
  },
  {
    name: "Reed College Bookstore",
    logoUrl: "/reed.png",
    startDate: new Date(2012, 9),
    endDate: new Date(2013, 4),
    positions: [
      {
        title: "Cashier",
        startDate: new Date(2012, 9),
        endDate: new Date(2013, 4),
        bullets: [
          "Sales, customer service, online order fulfillment",
          "Assisted accounts receivable and bookkeeping",
        ],
      },
    ],
  },
  {
    name: "Stream Global Services",
    logoUrl: "/stream.svg",
    startDate: new Date(2011, 10),
    endDate: new Date(2012, 6),
    positions: [
      {
        title: "Customer Service Representative",
        startDate: new Date(2011, 10),
        endDate: new Date(2012, 6),
        bullets: [
          "Provided technical support for a diverse non-technical customer base",
          "Billing support, digital media account management",
          "Remote hardware and software troubleshooting",
          "Home network troubleshooting.",
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
  {
    name: "The Thacher School",
    logoUrl: "/thacher.png",
    description: "H.S. Diploma",
    completion: new Date(2008, 5),
    bullets: [
      "Yearbook editor",
      "Represented school at 2007 National Association of Independent School's People of Color Conference",
    ],
  },
];
