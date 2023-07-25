import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import classNames from "classnames";

interface Props {
  url: string;
}

const navLinks = [
  {
    displayText: "Bio",
    page: "/bio",
  },
  {
    displayText: "CV",
    page: "/cv",
  },
  {
    displayText: "Projects",
    page: "/projects",
  },
  {
    displayText: "Other",
    page: "/other",
  },
];

export default function RootHeader({ url }: Props) {
  return (
    <div className="py-8 px-4">
      <div className="flex flex-row align-center justify-start items-center gap-8">
        <div className="w-48" />
        <Image height={128} width={128} src={logo} alt={"Test"} />
        <Link
          className={classNames(
            "text-2xl hover:text-purple-600",
            url === "/"
              ? "underline-offset-2 underline font-bold"
              : "font-semibold"
          )}
          href={"/"}
        >
          Matthew Eilar
        </Link>
        {navLinks.map((x) => {
          return (
            <Link
              className={classNames(
                "text-lg hover:text-purple-600",
                x.page === url ? "underline-offset-2 underline font-bold" : ""
              )}
              href={x.page}
            >
              {x.displayText}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
