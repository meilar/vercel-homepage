import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";
import SkillsExplorer from "./skills-explorer";
export default function CvPage() {
  return (
    <RootLayout>
      <MainLayout>
        <div className="bg-slate">
          <SkillsExplorer />
        </div>
      </MainLayout>
    </RootLayout>
  );
}
