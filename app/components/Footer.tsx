import { format } from "date-fns";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="bg-yellow-300 mt-8">
      <div className="flex md:flex-row flex-col gap-y-4 justify-around px-12 py-6">
        <div className="flex flex-col max-w-sm space-y-2 font-normal text-sm">
          <p>{`© ${format(new Date(), "yyyy")} Matthew Eilar`}</p>
          <p>
            This site was made with{" "}
            <Link
              className="hover:font-bold font-semibold hover:text-red-500"
              href={"https://nextjs.org/"}
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              className="hover:font-bold font-semibold hover:text-red-500"
              href={"https://tailwindcss.com/"}
            >
              Tailwind CSS
            </Link>{" "}
            and hosted on{" "}
            <Link
              className="hover:font-bold font-semibold hover:text-red-500"
              href={"https://vercel.com/"}
            >
              Vercel
            </Link>
          </p>
        </div>
        <Socials />
        <div className="flex flex-col max-w-sm space-y-2 text-sm font-semibold">
          <p>Matthew Eilar</p>
          <Link href={"mailto:meilar@gmail.com"}>meilar@gmail.com</Link>
        </div>
      </div>
    </div>
  );
}
