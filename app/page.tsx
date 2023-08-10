import Image from "next/image";
import MainLayout from "./components/MainLayout";
import RootLayout from "./layout";

export default function Homepage() {
  return (
    <RootLayout>
      <MainLayout>
        <div className="bg-orange-400 p-4 rounded-lg shadow-xl">
          <Image
            height={1640}
            width={2360}
            className="w-full h-full"
            src={"/homepage.jpeg"}
            alt={""}
          />
        </div>

        {/* <Carousel
          carouselItems={[
            {
              src: "/forest.jpeg",
              head: "Full-Stack Web Developer",
              text: "Apprentice developer with experience building sites in .Net Core framework, Node.js, and React.",
            },
            { src: "/avocado.jpeg", head: "High-Caliber People Skills" },
            { src: "/river.jpeg", head: "Adaptable and Capable" },
          ]}
        /> */}
      </MainLayout>
    </RootLayout>
  );
}
