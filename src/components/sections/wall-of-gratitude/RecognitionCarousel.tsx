import { useEffect, useRef, useState, type ReactNode } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type RecognitionItem = { id: string };

type RecognitionCarouselProps<T extends RecognitionItem> = {
  items: T[];
  ariaLabel: string;
  itemClassName: string;
  renderItem: (item: T) => ReactNode;
};

export default function RecognitionCarousel<T extends RecognitionItem>({
  items,
  ariaLabel,
  itemClassName,
  renderItem,
}: RecognitionCarouselProps<T>) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [edges, setEdges] = useState({
    atStart: true,
    atEnd: true,
  });
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const syncEdges = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      setHasOverflow(maxScroll > 1);
      setEdges({
        atStart: scroller.scrollLeft <= 1,
        atEnd: scroller.scrollLeft >= maxScroll - 1,
      });
    };

    syncEdges();

    scroller.addEventListener("scroll", syncEdges, {
      passive: true,
    });

    const observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(syncEdges);

    observer?.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", syncEdges);
      observer?.disconnect();
    };
  }, [items.length]);

  const page = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector("li");

    const gap =
      Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;

    const distance = card
      ? card.getBoundingClientRect().width + gap
      : scroller.clientWidth;

    scroller.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  const arrow = cn(
    "flex size-10 items-center justify-center rounded-full border border-hairline bg-white",
    "text-[var(--color-primary)] shadow-[0_2px_10px_-4px_rgba(27,42,82,0.15)]",
    "transition-all duration-200",
    "hover:border-[var(--color-primary)]/30",
    "hover:shadow-[0_6px_18px_-6px_rgba(27,42,82,0.25)]",
    "disabled:pointer-events-none disabled:opacity-35",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
  );

  return (
    <div>
      <ul
        ref={scrollerRef}
        aria-label={ariaLabel}
        className={cn(
          "mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto py-2",
          !hasOverflow && "justify-center",
          "overscroll-x-contain",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "shrink-0 snap-start",
              itemClassName,
            )}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={edges.atStart}
          aria-label={`Show previous ${ariaLabel.toLowerCase()}`}
          className={arrow}
        >
          <CaretLeftIcon className="size-4" weight="bold" />
        </button>

        <button
          type="button"
          onClick={() => page(1)}
          disabled={edges.atEnd}
          aria-label={`Show next ${ariaLabel.toLowerCase()}`}
          className={arrow}
        >
          <CaretRightIcon className="size-4" weight="bold" />
        </button>
      </div>

    </div>
  );
}