import RootHeader from "./RootHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto">
      <RootHeader />
      {children}
    </div>
  );
}
