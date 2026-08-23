import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/data/events";

/**
 * EVT-04 — Event Gallery.
 *
 * Pinterest-style masonry: variable-height tiles packed into columns.
 *
 * When GALLERY_IMAGES is empty (photos not yet available), renders a
 * placeholder state rather than hiding the section entirely.
 *
 * Replace the commented-out entries in src/data/events.ts with real
 * event photos when available.
 */
export default function EventGallery() {
  return (
    <SectionWrapper divided id="gallery">
      <SectionHeading
        align="center"
        eyebrow="Community moments"
        title="Moments from KWT"
        description="A look at the conversations, sessions, and people helping build the KWT community."
        className="mb-12"
      />

      {GALLERY_IMAGES.length === 0 ? (
        // Placeholder state — shown until real event photos are provided.
        <div className="rounded-2xl border border-hairline bg-[var(--color-background)] px-8 py-16 text-center">
          <p className="text-sm text-[var(--color-secondary)] opacity-60">
            {/* [PLACEHOLDER — EVENT PHOTO] */}
            Event photos coming soon.
          </p>
        </div>
      ) : (
        <>
          {/*
            Pinterest-style masonry via CSS multi-column.

            Why columns and not grid: real masonry needs each tile to keep its
            own height, and CSS grid can't do that without either fixed row
            spans (which means knowing every image's dimensions up front) or
            `grid-template-rows: masonry`, which is not yet broadly shipped.
            Multi-column packs variable-height tiles for free.

            Trade-off: columns flow top-to-bottom, then across — so tile order
            reads down each column, not left-to-right. Fine for a gallery,
            where the sequence carries no meaning.

            Note gap only supplies the *column* gap here; multi-column has no
            row gap, so vertical spacing comes from `mb-3` on each tile.
          */}
          <div className={cn("columns-2 gap-3 lg:columns-3")}>
            {GALLERY_IMAGES.map((img, i) => (
              <figure
                key={i}
                className={cn(
                  "mb-3 break-inside-avoid overflow-hidden rounded-2xl",
                  "ring-1 ring-hairline bg-[var(--color-accent)]/30",
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  // A declared ratio crops the tile; without one the photo's
                  // intrinsic proportions set the height. Either way the
                  // reserved box is known before load, so tiles don't reflow.
                  style={img.aspect ? { aspectRatio: img.aspect } : undefined}
                  className={cn(
                    "w-full object-cover object-center",
                    "transition-transform duration-500 ease-out hover:scale-[1.04]",
                    img.aspect ? "h-full" : "h-auto",
                  )}
                />
              </figure>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-[var(--color-secondary)] opacity-60">
            Photos from KWT community events — more coming soon.
          </p>
        </>
      )}
    </SectionWrapper>
  );
}
