import { format } from "date-fns";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="bg-yellow-300 mt-8">
      <div className="flex flex-row justify-around px-12 py-6">
        <div className="flex flex-col max-w-sm space-y-2 font-semibold text-sm">
          <p>{`© ${format(new Date(), "yyyy")} Matthew Eilar`}</p>
          <p>This site was made with Next.js and hosted on Vercel</p>
        </div>
        <Socials />
        <div className="flex flex-col max-w-sm space-y-2 text-sm font-semibold">
          <p>Matthew Eilar</p>
          <Link href={"mailto:meilar#gmail.com"}>meilar@gmail.com</Link>
        </div>
      </div>
    </div>
  );
}
