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

export default function RootHeader({ slug }: { slug?: string }) {
  return (
    <div className="py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-start items-center gap-8">
        <div>
          <Image
            priority
            style={{ width: 128, height: 128 }}
            width={128}
            height={128}
            src={"/logo.svg"}
            alt={""}
          />
        </div>
        <div>
          <Link
            className={classNames(
              "text-2xl hover:text-purple-600 font-semibold"
            )}
            href={"/"}
          >
            Matthew Eilar
          </Link>
        </div>
        <div className="flex flex-row space-x-4">
          {navLinks.map((x) => {
            return (
              <Link
                className={classNames(
                  "text-lg hover:text-purple-600 underline-offset-4  hover:underline",
                  x.page === slug ? "underline" : ""
                )}
                href={x.page}
              >
                {x.displayText}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
