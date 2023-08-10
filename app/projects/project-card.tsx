import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Project } from "./content";
import Link from "next/link";
import { format } from "date-fns";
import NavButton from "../components/NavButton";

export default function ProjectCard({
  image,
  imgAlt,
  name,
  summary,
  keywords,
  repoUrl,
  href,
  date,
}: Project) {
  return (
    <div className="z-10 flex justify-center items-center h-screen">
      <div className="max-w-3xl rounded overflow-hidden shadow-lg">
        <div className="relative">
          <img className="w-full max-w-5xl" src={image} alt={imgAlt} />
          <p className="absolute top-4 right-4  text-black text-2xl font-bold bg-yellow-400 rounded-full w-24 h-24 justify-center align-middle text-center items-center flex">
            {format(date, "yyyy")}
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 w-full">
            <span>{name}</span>
            {repoUrl && (
              <>
                <span className="mx-2 font-thin">|</span>
                <Link
                  className="text-blue-500 hover:text-blue-700"
                  href={repoUrl}
                >
                  Link to repo
                </Link>
              </>
            )}
            <span className="text-right ml-auto w-full"></span>
          </div>
          <div className="text-gray-700 text-base">
            {<ReactMarkdown children={summary} />}
          </div>
        </div>
        {href && (
          <div className="px-6 py-4 flex flex-row-reverse w-full">
            <NavButton href={href} text={`Read More -->`} />
          </div>
        )}
        <div className="px-6 py-4">
          {keywords.map((k) => {
            return (
              <>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {`#${k}`}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
