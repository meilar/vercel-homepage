"use client";

import { useRouter } from "next/navigation";

interface props {
  href: string;
  text: string;
}

export default function NavButton({ href, text }: props) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(href);
      }}
      type="button"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}
