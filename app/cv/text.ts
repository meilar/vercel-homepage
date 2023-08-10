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
      "I have really great writing skills—ask me about my teachers sometime. I have prepared high-visibility communications, like board reports and executive communications.",
    ],
    type: SkillType.General,
  },
  {
    title: "Mentorship",
    bullet: [
      "I have a deep personal commitment to being a growth factor for the people on my team. I can be extremely competitive, but I balance that out by making sure that as I experience success I am helping the people on my team be successful too.",
    ],
    type: SkillType.People,
  },
  {
    title: "Training",
    bullet: [
      "In my program operations and volunteer coordinator positions I grew comfortable developing and presenting training presentations.",
    ],
    type: SkillType.People,
  },
  {
    title: "Assessment and Process Improvement",
    bullet: [
      "I participated in a year-long professional development training in quantitative evaluation led by Dialogues in Action. I learned how to prepare evaluation metrics, design assessment protocols, and collate data.",
    ],
    type: SkillType.General,
  },
  {
    title: "IDE",
    bullet: ["I have used Xcode, Atom, and VSCode"],
    type: SkillType.Tools,
  },
  {
    title: "Postman",
    bullet: [
      "I have used Postman to make test API calls and to set up automated endpoint testing",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Chrome Developer Tools",
    bullet: [
      "I am always learning new ways to take advantage of Developer tools. I am very comfortable using the DOM inspector and source tabs, and I have explored some of the more advanced testing and process recording features",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Xcode",
    bullet: [
      "I am many years away from claiming to 'understand Xcode' but I can create and build a sample project",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Git/Github",
    bullet: [
      "I am very comfortable using the Github CLI and web interface to manage version control, submit pull requests, and resolve conflicts",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Beekeeper/MySQL Workbench",
    bullet: [
      "I have used Beekeeper and MySQL Workbench to manage database migrations, make manual SQL queries, and inspect data",
    ],
    type: SkillType.Tools,
  },
  {
    title: "Test-Driven Development",
    bullet: [
      "I have practiced using test-driven development to complete practice projects. After a year of developing a new product, I have opinions about that development approach that I'd be happy to share with you.",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "JavaScript/Typescript",
    bullet: [
      "When I'm working in C#, I try to use .map() before remembering the syntax to a foreach loop. When I am working in Swift, I get compiler errors because I automatically try to use .toString(). I have forgotten how to write Vanilla JS without Typescript annotations. If you're looking for a Typescript engineer, I'm your guy.",
    ],
    type: SkillType.Languages,
  },
  {
    title: "C#/.NET",
    bullet: [
      "I have used these tools to create command line apps, backend functions, and webpages with the Blazor templating system",
    ],
    type: SkillType.Languages,
  },
  {
    title: "Swift",
    bullet: [
      "I have beginner level Swift and SwiftUI skills, very interested in developing them further",
    ],
    type: SkillType.Languages,
  },
  {
    title: "Zsh/Shell Scripting",
    bullet: [
      "I am very comfortable using command line tools for various tasks and to update software",
    ],
    type: SkillType.Languages,
  },
  {
    title: "Design Patterns",
    bullet: [
      "I am continuing to learn new design patterns and how to implement them in future projects",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "APIs",
    bullet: [
      "I am comfortable designing functions to make REST API calls, and designing endpoint routes following REST conventions",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Programming Paradigms",
    bullet: [
      "I have a journeymans level of understanding of the different programming paradigms, including declarative, imperative, functional, and object-oriented. I have some understanding of their tradeoffs, strengths, and limitations.",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Problem Solving",
    bullet: [
      "I am very persistent at problem solving. I learn new skills through example code, tutorials and by reading reference documentation",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "HTML",
    bullet: [
      "I have a good understanding of HTML, tags, tag properties, the DOM, and various HTML rendering strategies used by front-end frameworks",
    ],
    type: SkillType.Web,
  },
  {
    title: "CSS",
    bullet: [
      "I have a good understanding of applying styling through CSS rules, CSS properties, working with various size units, class scoping, and conditional rules",
    ],
    type: SkillType.Web,
  },
  {
    title: "React",
    bullet: [
      "I am experienced user of React to create webpages and components. I can implement React hooks and packages that extend hooks. I understand React's declarative paradigm, the component life cycle, how to decompose a page into components, and various data loading strategies",
    ],
    type: SkillType.Web,
  },
  {
    title: "Bootstrap",
    bullet: [
      "Btn btn, who's got the btn? I used Bootstrap to style pages extensively in my bootcamp.",
    ],
    type: SkillType.Web,
  },
  {
    title: "Tailwind",
    bullet: [
      "I have used Tailwind extensively in my most recent job, I can style pages extremely quickly, including strategies for great looking mobile-responsive components.",
    ],
    type: SkillType.Web,
  },
  {
    title: "State Management",
    bullet: [
      "I have used React hooks to manage local state, as well as Redux and ORMs (Entity and Prisma) to manage state across sessions",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Code-first Database",
    bullet: [
      "I have used Planetscale extensively, which takes a code-first approach to databases, schema management, and migration management",
    ],
    type: SkillType.Concepts,
  },
  {
    title: "Linux",
    bullet: [
      "I can get my way around a Linux system. Let's say... skilled enough to install whatever software I need with Flatpak, not skilled enough to fix a missing sound driver",
    ],
    type: SkillType.Deployment,
  },
  {
    title: "OAuth",
    bullet: [
      "I have implemented and maintained OAuth integrations with Microsoft Azure and Google Firebase",
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
          "Managed box office, volunteers, and front of house at 26 live concerts per season",
          "Supervised renewal campaigns, mail, and all CRM data for marketing and funders",
          "Implemented ticket sales platform and donor database migration leading to a significant increase in online sales and individual giving",
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
          "Developed and led art, music, computer, and cooking after-school and summer programs in Camas, WA",
          "Managed member registration, and payment systems",
          "Launched an annual art show fundraiser",
        ],
      },
      {
        title: "Youth Development Professional",
        startDate: new Date(2013, 8),
        endDate: new Date(2014, 8),
        bullets: [
          "Led after-school programs in the Reynolds and David Douglas school districts",
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

export type DisplayType = {
  type: SkillType;
  label: string;
  bg: string;
  fill: string;
};

export const displayTypes: DisplayType[] = [
  {
    type: SkillType.General,
    label: "General",
    bg: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100",
    fill: "fill-cyan-500",
  },
  {
    type: SkillType.Tools,
    label: "Tools",
    bg: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    fill: "fill-amber-500",
  },
  {
    type: SkillType.People,
    label: "People",
    bg: "bg-indigo-50 text-inigo-600 hover:bg-indigo-100",
    fill: "fill-indigo-500",
  },
  {
    type: SkillType.Languages,
    label: "Languages",
    bg: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    fill: "fill-blue-500",
  },
  {
    type: SkillType.Concepts,
    label: "Concepts",
    bg: "bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-100",
    fill: "fill-fuchsia-500",
  },
  {
    type: SkillType.Web,
    label: "Web",
    bg: "bg-lime-50 text-lime-600 hover:bg-lime-100",
    fill: "fill-lime-500",
  },
  {
    type: SkillType.Deployment,
    label: "Deployment",
    bg: "bg-red-50 text-red-600 hover:bg-red-100",
    fill: "fill-red-500",
  },
];
