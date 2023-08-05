"use client";

import { useState } from "react";
import { Skill, SkillType, skills } from "./text";

type DisplayType = {
  type: SkillType;
  label: string;
  bg: string;
  fill: string;
};

const displayTypes: DisplayType[] = [
  {
    type: SkillType.General,
    label: "General",
    bg: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100",
    fill: "fill-cyan-500",
  },
  {
    type: SkillType.Tools,
    label: "Tools",
    bg: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    fill: "fill-amber-500",
  },
  {
    type: SkillType.People,
    label: "People",
    bg: "bg-indigo-50 text-inigo-600 hover:bg-indigo-100",
    fill: "fill-indigo-500",
  },
  {
    type: SkillType.Languages,
    label: "Languages",
    bg: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    fill: "fill-blue-500",
  },
  {
    type: SkillType.Concepts,
    label: "Concepts",
    bg: "bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-100",
    fill: "fill-fuchsia-500",
  },
  {
    type: SkillType.Web,
    label: "Web",
    bg: "bg-lime-50 text-lime-600 hover:bg-lime-100",
    fill: "fill-lime-500",
  },
  {
    type: SkillType.Deployment,
    label: "Deployment",
    bg: "bg-red-50 text-red-600 hover:bg-red-100",
    fill: "fill-red-500",
  },
];

export default function SkillsExplorer() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [filtered, setFiltered] = useState(false);
  const [selected, setSelected] = useState<DisplayType[]>(displayTypes);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="py-2 px-4">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="my-12">
            {displayTypes.map((x) => (
              <button
                type="button"
                onClick={() => {
                  setFiltered(true);
                  if (selected.includes(x)) {
                    setSelected(selected.filter((y) => y !== x));
                  } else {
                    const newArray = selected;
                    newArray.push(x);
                    setSelected(newArray);
                  }
                  alert(selected.length);
                }}
                className={`rounded-md ${x.bg} px-2.5 py-1.5 mx-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100`}
              >
                {x.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setFiltered(false);
                setSelected([]);
              }}
              className={`rounded-md bg-gray-50 text-gray-500 hover:bg-gray-200 px-2.5 py-1.5 mx-2 text-sm font-semibold shadow-sm `}
            >
              Reset
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map(
              (x) =>
                (!filtered || displayTypes.find((y) => y.type === x.type)) && (
                  <span
                    onClick={() => {
                      setSelectedSkill(x);
                    }}
                    className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:cursor-pointer"
                  >
                    <svg
                      className={`h-1.5 w-1.5 ${
                        displayTypes.find((z) => z.type === x.type)?.fill
                      }`}
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                    {x.title}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <ul className="relative mt-6 flex-1 px-4 sm:px-6">
          {selectedSkill?.bullet.map((x) => (
            <li className="mt-2 px-4 ml-2 list-disc">{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
