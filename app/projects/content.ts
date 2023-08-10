const robogerMd =
  "This challenge was to take a number from user input, and return to that user all the numbers from 0 to the user input number, with some numbers substituted with words based on the presence of certain digits in the numbers. I had a really fun time working on the CSS styling of this project.";

const itosMd = "itOS was a project for the managed IT services industry. I was a part of a 3 person development team building the app on a Next.js + TailwindUI + Planetscale stack. By combining so many code-first and SaaS products, our team was able to build out an alpha version of the application in just a few months. Our product integrated with Microsoft Azure services and featured many integrations with Jira, Microsoft Graph, Sendgrid, and Twilio APIs.";

const aviciiMd =
  "This challenge was to build a website that allows a user to customer and calculates the price for that pizza. I used it as an opportunity to pay tribute to the late musician Avicii and the beloved mediocre Southern California pizza chain Ameci's Pizza.";

export type Project = {
  name: string;
  summary: string;
  date: Date;
  image: string;
  imgAlt: string;
  href?: string;
  repoUrl?: string;
  style: string;
  keywords: string[];
};

export const projects: Project[] = [
  {
    name: "itOS",
    summary: itosMd,
    date: new Date(2023, 7),
    image: "/itos.png",
    imgAlt: "Screenshot of itOS dashboard",
    style: "",
    keywords: ["NextJS", "Planetscale", "Vercel"],
  },
  {
    name: "Avicii's Pizza",
    summary: aviciiMd,
    date: new Date(2022, 4),
    image: "/avicii.webp",
    imgAlt: "Screenshot of project",
    href: "https://hammerandjack.com/coding/2022/01/aviciis-pizza/",
    repoUrl: "https://github.com/meilar/avicii-pizza",
    style: "",
    keywords: ["vanillaJS", "css"],
  },
  {
    name: "Mr. Roboger's Neighborhood",
    summary: robogerMd,
    date: new Date(2022, 3),
    image: "/roboger.jpeg",
    imgAlt: "Screenshot of project",
    href: "https://hammerandjack.com/coding/2022/01/mr-roboger/",
    repoUrl: "https://github.com/meilar/robot-song",
    style: "",
    keywords: ["vanillaJS", "css"],
  },
];
