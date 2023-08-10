import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";
import SkillsExplorer from "./skills-explorer";
import WorkExplorer from "./work-explorer";
import EdExplorer from "./ed-explorer";
import PageHeader from "../components/PageHeader";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";

export default function CvPage() {
  return (
    <RootLayout>
      <MainLayout>
        <PageHeader
          header={"Curriculum Vitae"}
          description={
            "Explore my skills and look at my work and education history"
          }
          icon={<BuildingLibraryIcon className="h-12 w-12" />}
          primary={"bg-amber-300"}
          secondary={"bg-blue-700"}
          iconColor={"text-yellow-900"}
        />
        <div className="bg-slate divide-y-2 space-y-12 mt-12">
          <div className="row-span-full">
            <SkillsExplorer />
          </div>
          <div className="row-span-full">
            <WorkExplorer />
          </div>
          <div className="row-span-full">
            <EdExplorer />
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
