import Footer from "./Footer";
import RootHeader from "./RootHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:max-w-5xl mx-auto w-full">
        <RootHeader />
        <div className="px-4 md:max-w-3xl md:mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
