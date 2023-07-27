import MainLayout from "../components/MainLayout";
import RootLayout from "../layout";

export default function BioPage() {
  return (
    <RootLayout>
      <MainLayout>
        <div>
          <div>
            <div className="w-fit">
              <img
                className="rounded-md w-96"
                src="/headshot.jpg"
                alt={"In late winter light on Mt. Tabor"}
              />
              <p className="text-center mt-2 text-sm font-light">
                In late winter light on Mt. Tabor
              </p>
            </div>
            <div className="w-fit mt-6">
              <img
                className="rounded-md w-96"
                src="/youth.jpeg"
                alt={"Playing Reader Rabbit on an Apple IIc in 1996"}
              />
              <p className="text-center mt-2 text-sm font-light">
                In late winter light on Mt. Tabor
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
