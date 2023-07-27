import Carousel from "./components/Carousel";
import MainLayout from "./components/MainLayout";
import RootLayout from "./layout";

export default function Homepage() {
  return (
    <RootLayout>
      <MainLayout>
        <Carousel
          carouselItems={[
            {
              src: "/forest.jpeg",
              head: "Full-Stack Web Developer",
              text: "Apprentice developer with experience building sites in .Net Core framework, Node.js, and React.",
            },
            { src: "/avocado.jpeg", head: "High-Caliber People Skills" },
            { src: "/river.jpeg", head: "Adaptable and Capable" },
          ]}
        />
      </MainLayout>
    </RootLayout>
  );
}
