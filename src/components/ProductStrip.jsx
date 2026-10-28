
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import ForkliftArt from "./ForkliftArt";

const BASE_URL =
  "https://website-sr-data-517255845732-ap-south-1-an.s3.ap-south-1.amazonaws.com/product-list/";

export default function ProductStrip({ productList = [] }) {
  const stripRef = useRef(null);
  const animationRef = useRef(null);
  const previousTimeRef = useRef(null);

  const stopScroll = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    previousTimeRef.current = null;
  };

  const startScroll = (direction) => {
    stopScroll();

    const scroll = (timestamp) => {
      const strip = stripRef.current;
      if (!strip) return;

      if (previousTimeRef.current === null) {
        previousTimeRef.current = timestamp;
      }

      const delta = timestamp - previousTimeRef.current;
      previousTimeRef.current = timestamp;

      strip.scrollLeft += direction * 0.35 * delta;

      const atLeft = strip.scrollLeft <= 0;
      const atRight =
        strip.scrollLeft + strip.clientWidth >=
        strip.scrollWidth - 1;

      if (
        (direction === -1 && atLeft) ||
        (direction === 1 && atRight)
      ) {
        stopScroll();
        return;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => stopScroll, []);

  return (
    <section className="bg-zinc-100 px-4 py-7 md:px-12">
      <div className="mx-auto flex max-w-[1450px] items-center gap-3">

        <button
          type="button"
          aria-label="Scroll products left"
          onMouseEnter={() => startScroll(-1)}
          onMouseLeave={stopScroll}
          className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-zinc-500 text-white lg:grid"
        >
          <ChevronLeft />
        </button>

        <div
          ref={stripRef}
          className="flex min-w-0 flex-1 gap-4 overflow-x-auto pb-3 scrollbar-hide"
        >
          {productList.map((item, i) => {
            const images = Array.isArray(item.image)
              ? item.image
              : [item.image];

            const imagePath = images[0];
            const imageUrl =
              typeof imagePath === "string"
                ? BASE_URL +
                imagePath
                  .split("/")
                  .map(encodeURIComponent)
                  .join("/")
                : "";

            return (
              <div
                key={item.id ?? i}
                className="group flex min-h-[108px] shrink-0 items-center gap-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <ForkliftArt small electric={i === 1} />
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-black tracking-wide text-zinc-700">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs font-bold text-brand-orange">
                    <span>Product</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Scroll products right"
          onMouseEnter={() => startScroll(1)}
          onMouseLeave={stopScroll}
          className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-zinc-500 text-white lg:grid"
        >
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}
