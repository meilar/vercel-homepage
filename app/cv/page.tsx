import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";
import SkillsExplorer from "./skills-explorer";
import WorkExplorer from "./work-explorer";
import EdExplorer from "./ed-explorer";

export default function CvPage() {
  return (
    <RootLayout>
      <MainLayout>
        <div className="bg-slate divide-y-2 space-y-12">
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
