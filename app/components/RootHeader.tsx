import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

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
  // {
  //   displayText: "Other",
  //   page: "/other",
  // },
];

export default function RootHeader() {
  return (
    <div className="py-8">
      <div className="flex flex-row justify-start items-center gap-8">
        <Image
          priority
          style={{ width: 128, height: 128 }}
          width={128}
          height={128}
          src={"/logo.svg"}
          alt={""}
        />
        <Link
          className={classNames("text-2xl hover:text-purple-600 font-semibold")}
          href={"/"}
        >
          Matthew Eilar
        </Link>
        {navLinks.map((x) => {
          return (
            <Link
              className={classNames("text-lg hover:text-purple-600")}
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
