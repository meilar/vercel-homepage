import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import RootLayout from "../layout";
import { projects } from "./content";
import ProjectCard from "./project-card";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <RootLayout>
      <MainLayout slug="/projects">
        <PageHeader
          primary="bg-teal-300"
          secondary="bg-yellow-300"
          iconColor="text-teal-300"
          header={"Projects"}
          description={"Explore some of my favorite projects"}
          icon={<BeakerIcon className="h-12 w-12" />}
        />
        <div className="flex flex-col space-y-24 mt-12">
          {projects.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </MainLayout>
    </RootLayout>
  );
}
