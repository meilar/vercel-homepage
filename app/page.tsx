import Carousel from "./components/Carousel";
import RootLayout from "./layout";

export default function Homepage() {
  return (
    <main>
      <RootLayout url="/">
        <Carousel
          sx="mt-12 mr-auto ml-auto max-h-1/2"
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
      </RootLayout>
    </main>
  );
}
