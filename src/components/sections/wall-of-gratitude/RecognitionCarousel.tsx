import { useEffect, useRef, useState, type ReactNode } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type RecognitionItem = { id: string };

type RecognitionCarouselProps<T extends RecognitionItem> = {
  items: T[];
  ariaLabel: string;
  itemClassName: string;
  renderItem: (item: T) => ReactNode;
  controls?: "below" | "sides";
  circular?: boolean;
  sideControlsTopClassName?: string;
  sideControlClassName?: string;
  trackGapClassName?: string;
};

/**
 * Shared snap-scrolling track for Wall of Gratitude sections. It is based on
 * the native-scroll, ResizeObserver, and arrow pattern used by About/Team.
 */
export default function RecognitionCarousel<T extends RecognitionItem>({
  items,
  ariaLabel,
  itemClassName,
  renderItem,
  controls = "below",
  circular = false,
  sideControlsTopClassName,
  sideControlClassName,
  trackGapClassName = "gap-5",
}: RecognitionCarouselProps<T>) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true, hasOverflow: false });

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const syncEdges = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      setEdges({
        atStart: scroller.scrollLeft <= 1,
        atEnd: scroller.scrollLeft >= maxScroll - 1,
        hasOverflow: maxScroll > 1,
      });
    };

    syncEdges();
    scroller.addEventListener("scroll", syncEdges, { passive: true });
    const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(syncEdges);
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
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : scroller.clientWidth;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;

    if (circular && maxScroll > 1) {
      if (direction === 1 && scroller.scrollLeft >= maxScroll - 1) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      if (direction === -1 && scroller.scrollLeft <= 1) {
        scroller.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }
    }

    scroller.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const arrowClass = cn(
    "flex size-10 items-center justify-center rounded-full border border-hairline bg-white",
    "text-[var(--color-primary)] shadow-[0_2px_10px_-4px_rgba(27,42,82,0.15)]",
    "transition-all duration-200 hover:border-[var(--color-primary)]/30",
    "hover:shadow-[0_6px_18px_-6px_rgba(27,42,82,0.25)]",
    "disabled:pointer-events-none disabled:opacity-35",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 focus-visible:ring-offset-2",
  );

  const previousDisabled = !edges.hasOverflow || (!circular && edges.atStart);
  const nextDisabled = !edges.hasOverflow || (!circular && edges.atEnd);

  const controlsNode = (
    <div className={controls === "sides" ? "contents" : "mt-8 flex items-center justify-center gap-3"}>
      <button
        type="button"
        onClick={() => page(-1)}
        disabled={previousDisabled}
        aria-label={`Show previous ${ariaLabel.toLowerCase()}`}
        className={cn(arrowClass, controls === "sides" && "absolute left-2 top-1/2 z-10 -translate-y-1/2", sideControlsTopClassName, sideControlClassName)}
      >
        <CaretLeftIcon className="size-4" weight="bold" />
      </button>
      <button
        type="button"
        onClick={() => page(1)}
        disabled={nextDisabled}
        aria-label={`Show more ${ariaLabel.toLowerCase()}`}
        className={cn(arrowClass, controls === "sides" && "absolute right-2 top-1/2 z-10 -translate-y-1/2", sideControlsTopClassName, sideControlClassName)}
      >
        <CaretRightIcon className="size-4" weight="bold" />
      </button>
    </div>
  );

  return (
    <div className={controls === "sides" ? "relative" : undefined}>
      <ul
        ref={scrollerRef}
        aria-label={ariaLabel}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto py-2",
          trackGapClassName,
          "overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {items.map((item) => (
          <li key={item.id} className={cn("shrink-0 snap-start", itemClassName)}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
      {controlsNode}
    </div>
  );
}
