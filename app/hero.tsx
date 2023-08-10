"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/bio")}
      className="bg-orange-400 p-4 rounded-lg shadow-xl hover:bg-fuchsia-400 hover:cursor-pointer"
    >
      <Image
        height={1640}
        width={2360}
        className="w-full h-full"
        src={"/homepage.jpeg"}
        alt={"Homepage illustration"}
      />
    </div>
  );
}
