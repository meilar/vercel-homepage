import classNames from "classnames";
import RootHeader from "./components/RootHeader";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Eilar — Web Developer",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-white")}>
        <RootHeader />
        <>{children}</>
      </body>
    </html>
  );
}
