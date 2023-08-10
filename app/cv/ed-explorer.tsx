import { format } from "date-fns";
import { educationHistory } from "./text";

export default function EdExplorer() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl my-8 font-semibold">Education</h1>
      {educationHistory.map((e) => {
        return (
          <div className="grid grid-cols-3 my-4">
            <div className="col-span-1">
              <div className="w-36 h-auto">
                <img src={e.logoUrl} />
              </div>
            </div>
            <div className="col-span-2 flex-col">
              <h3 className="text-lg font-semibold">{e.name}</h3>
              <div className="flex-col mt-4">
                <p>
                  <span className="font-light">
                    {format(e.completion, "yyyy")}
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-md italic">{e.description}</span>
                </p>
                {e.bullets.map((b) => {
                  return (
                    <p className="ml-6">
                      <span>•</span>
                      <span className="ml-1 text-sm font-light">{b}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
