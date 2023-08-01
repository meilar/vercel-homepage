"use client";

import { useState } from "react";
import { Skill, SkillType, skills } from "./text";

function getBadgeColor(type: SkillType) {
  switch (type) {
    case SkillType.People:
      return "fill-indigo-500";
    default:
      return "fill-red-500";
  }
}

export default function SkillsExplorer() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="py-2 px-4">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((x) => (
              <span
                onClick={() => {
                  setSelectedSkill(x);
                }}
                className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:cursor-pointer"
              >
                <svg
                  className={`h-1.5 w-1.5 ${getBadgeColor(x.type)}`}
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                {x.title}
              </span>
            ))}
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
