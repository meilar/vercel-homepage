import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";
import SkillsExplorer from "./skills-explorer";
import WorkExplorer from "./work-explorer";
export default function CvPage() {
  return (
    <RootLayout>
      <MainLayout>
        <div className="bg-slate">
          <SkillsExplorer />
          <div className="mt-8">
            <WorkExplorer />
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
