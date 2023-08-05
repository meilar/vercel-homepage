import { format } from "date-fns";
import { workHistory } from "./text";

export default function WorkExplorer() {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl my-8 font-semibold">Work History</h1>
      {workHistory.map((h) => {
        return (
          <div className="grid grid-cols-3 my-4">
            <div className="col-span-1">
              <div className="w-36 h-auto">
                <img src={h.logoUrl} />
              </div>
            </div>
            <div className="col-span-2 flex-col">
              <h3 className="text-lg font-semibold">{h.name}</h3>
              {h.positions.map((p) => {
                return (
                  <div className="flex-col mt-4">
                    <p>
                      <span className="text-md font-light">{p.title}</span>
                      <span className="mx-2">|</span>
                      <span className="font-light">
                        {format(p.startDate, "yyyy")}
                      </span>
                      <span className="mx-1">-</span>
                      {p.endDate ? (
                        <span className="font-light">
                          {format(p.endDate, "yyyy")}
                        </span>
                      ) : (
                        <span>present</span>
                      )}
                    </p>
                    {p.bullets.map((b) => {
                      return (
                        <p className="ml-6">
                          <span>•</span>
                          <span className="ml-1 text-sm font-light">{b}</span>
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
