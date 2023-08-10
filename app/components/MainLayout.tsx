import Footer from "./Footer";
import RootHeader from "./RootHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <RootHeader />
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
