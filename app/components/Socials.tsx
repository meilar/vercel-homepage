"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Service = {
  name: string;
  icon: string;
  href: string;
};

const services: Service[] = [
  {
    name: "LinkedIn",
    icon: "/linkedin2.png",
    href: "https://www.linkedin.com/in/matthew-eilar/",
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    href: "https://www.linkedin.com/in/matthew-eilar/",
  },
  {
    name: "Mastodon",
    icon: "/mastodon.png",
    href: "https://hachyderm.io/@Mtthwkrl",
  },
];

export default function Socials() {
  const router = useRouter();
  return (
    <div className="flex flex-row space-x-4">
      {services.map((s) => {
        return (
          <div
            onClick={() => router.push(s.href)}
            className="h-8 w-8 hover:cursor-pointer hover:bg-red-500 rounded-full bg-transparent"
          >
            <Image
              className="bg-transparent"
              height={48}
              width={48}
              alt={`${s.name} icon`}
              src={s.icon}
            />
          </div>
        );
      })}
    </div>
  );
}
