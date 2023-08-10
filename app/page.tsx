import MainLayout from "./components/MainLayout";
import Hero from "./hero";
import RootLayout from "./layout";

export default function Homepage() {
  return (
    <RootLayout>
      <MainLayout>
        <Hero />
      </MainLayout>
    </RootLayout>
  );
}
