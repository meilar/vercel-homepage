import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";
import { projects } from "./content";
import ProjectCard from "./project-card";

export default function Page() {
  return (
    <RootLayout>
      <MainLayout>
        <div>
          <h1>Projects</h1>
          <p>Here's a list of some of my favorite projects.</p>
        </div>
        <div>
          {projects.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </MainLayout>
    </RootLayout>
  );
}
