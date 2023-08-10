import { UserIcon } from "@heroicons/react/24/solid";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import RootLayout from "../layout";

export default function BioPage() {
  return (
    <RootLayout>
      <MainLayout>
        <PageHeader
          primary="bg-lime-300"
          secondary="bg-pink-300"
          iconColor="text-lime-300"
          header={"About Me"}
          description={"Explore some of my favorite projects"}
          icon={<UserIcon className="h-12 w-12" />}
        />
        <div className="max-w-3xl mt-8 mr-auto ml-auto grid grid-cols-2">
          <div className="col-span-1">
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
                Playing Reader Rabbit on an Apple IIc in 1996.
              </p>
            </div>
          </div>
          <div className="ml-4 p-4 pt-0 col-span-1">
            <p className="mt-4">
              My animating passion is for <strong>exploration</strong> and to
              discover <strong>new connections and patterns</strong> in the
              world around us. After studying Music History at Reed College, I
              started working in Portland, Oregon area non-profits, completing
              successful terms in <strong>administrative and operations</strong>{" "}
              roles at an organization dedicated to youth and family services,
              then performing arts.
            </p>
            <p className="mt-4">
              In March 2020, I was an essential part of pivoting the Portland
              Baroque Orchestra to an <strong>all-digital season</strong>,
              procuring equipment, doing preproduction work, and contributing
              directly as a recording assistant and video editor. In autumn
              2021, I left PBO to pursue{" "}
              <strong>more challenging and stimulating</strong> work.
            </p>
            <p className="mt-4">
              During the first half of 2022, I went through the{" "}
              <a href="https://www.epicodus.com">
                Epicodus Full-Stack Developer bootcamp
              </a>
              , in the C#/.Net and React track. This program consists of 20
              weeks of curriculum and just over a thousand hours with hands on
              keyboards. The program is modeled on workplaces that use Agile
              methodology, with development teams, daily standups and
              reflections, pair programming, and a day-one commitment to good
              practices like version control, unit testing, and documentation.
              My completion of the program, after a five week intership, is
              expected at the end of June, 2022.
            </p>
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
