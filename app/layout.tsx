import classNames from "classnames";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Matthew Eilar — Web Developer" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-white w-full h-full")}>
        {children}
      </body>
    </html>
  );
}
