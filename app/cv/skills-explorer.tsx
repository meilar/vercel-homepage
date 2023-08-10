"use client";

import { useEffect, useState } from "react";
import { Skill, SkillType, displayTypes, skills } from "./text";
import classNames from "classnames";
import { Transition } from "@headlessui/react";

export default function SkillsExplorer() {
  const allTypes = displayTypes.map((d) => d.type);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedType, setSelectedType] = useState<SkillType[]>(allTypes);
  const skillList = skills
    .filter((s) => selectedType.includes(s.type))
    .sort((a, b) => {
      if (a.title.charAt(0) > b.title.charAt(0)) {
        return 1;
      } else return -1;
    });

  function handleTypeClick(type: SkillType) {
    setSelectedSkill(null);
    if (!isFiltered) {
      setIsFiltered(true);
      setSelectedType([type]);
    } else {
      if (selectedType.includes(type)) {
        if (selectedType.length === 1) {
          setSelectedType(allTypes);
          setIsFiltered(false);
        } else {
          const newArr = selectedType.filter((y) => y !== type);
          setSelectedType(newArr);
        }
      } else {
        const arr = selectedType;
        arr.push(type);
        setSelectedType([...arr]);
      }
    }
  }

  useEffect(() => {}, [selectedType]);

  return (
    <div
      className="sm:grid sm:grid-cols-3"
      onMouseLeave={() => setSelectedSkill(null)}
    >
      <div className="col-span-2">
        <div className="py-2 px-4">
          <div className="my-12 flex flex-wrap">
            {displayTypes.map((type) => (
              <div
                key={`button-${type.type}`}
                className="flex flex-col justify-center items-center"
              >
                <button
                  type="button"
                  onClick={() => handleTypeClick(type.type)}
                  className={classNames(
                    `mt-4 rounded-md ${type.bg} px-2.5 py-1.5 mx-2 text-sm font-semibold shadow-sm `
                  )}
                >
                  {type.label}
                </button>
                {selectedType.includes(type.type) && isFiltered ? (
                  <div
                    className={classNames(
                      type.bg,
                      "text-xs h-1 w-1 rounded-full p-1 flex items-center justify-center mt-2"
                    )}
                  >
                    ✣
                  </div>
                ) : (
                  <div
                    className={
                      "text-xs h-1 w-1 rounded-full p-1 flex items-center justify-center mt-2"
                    }
                  />
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsFiltered(false);
                setSelectedType(allTypes);
              }}
              className={classNames(
                `rounded-md mt-4 bg-gray-50 text-gray-500 hover:bg-gray-200 px-2.5 py-1.5 mx-2 text-sm font-semibold shadow-sm`,
                isFiltered ? "" : "hidden"
              )}
            >
              Show All
            </button>
          </div>
          <p className="my-4 sm:hidden">Tap the skill below for more details</p>
          <div className="flex flex-wrap gap-2">
            {skillList.map((x) => (
              <>
                <span
                  key={x.title + "sm"}
                  onClick={() => {
                    setSelectedSkill(x);
                  }}
                  className="sm:hidden inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-md font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:cursor-pointer"
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
                <span
                  key={x.title}
                  onMouseEnter={() => {
                    setSelectedSkill(x);
                  }}
                  className="hidden sm:inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-md font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:cursor-pointer"
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
              </>
            ))}
          </div>
        </div>
      </div>
      <Transition
        className={"my-8"}
        key="large"
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={selectedSkill ? true : false}
      >
        <div
          className={classNames(
            "bg-blue-100 rounded-lg shadow-md p-2 sm:mx-0 mx-2 sticky top-36",
            selectedSkill ? "" : "hidden"
          )}
        >
          <ul
            className={
              (classNames(
                displayTypes.find((t) => t.type === selectedSkill?.type)?.bg
              ),
              "relative flex-1 px-1 sm:px-2")
            }
          >
            {selectedSkill?.bullet.map((x) => (
              <li key={x} className="">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}
