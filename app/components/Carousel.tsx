import classNames from "classnames";

type CarouselItem = {
  src: string;
  text?: string;
  head?: string;
};

export default function Carousel({
  carouselItems,
}: {
  carouselItems: CarouselItem[];
}) {
  return (
    <div
      className={classNames(
        "max-w-4xl mx-12 mb-12 mt-12 mr-auto ml-auto max-h-1/2"
      )}
    >
      <div className="snap-mandatory scroll-smooth snap-x overflow-x-auto inline-flex w-full">
        {carouselItems.map((x, i) => {
          return (
            <div
              key={i}
              id={`slide${i}`}
              className="box-content flex flex-none snap-start relative w-full"
            >
              <img src={x.src} className="w-full rounded-md" />
              {(x.text || x.head) && (
                <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full h-34">
                  <p className="text-center text-white font-semibold text-2xl">
                    {x.head}
                  </p>
                  <p className="text-center text-white font-light text-lg">
                    {x.text}
                  </p>
                </div>
              )}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={
                    carouselItems[i - 1]
                      ? `#slide${i - 1}`
                      : `#slide${carouselItems.length - 1}`
                  }
                  className="inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap justify-center items-center transition ease-in-out bg-opacity-20 bg-slate-50 rounded-full p-2 w-12 h-12"
                >
                  ❮
                </a>
                <a
                  href={carouselItems[i + 1] ? `#slide${i + 1}` : `#slide0`}
                  className="inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap justify-center items-center transition ease-in-out bg-opacity-20 bg-slate-50 rounded-full p-2 w-12 h-12"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
