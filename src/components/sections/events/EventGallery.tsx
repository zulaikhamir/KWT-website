import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/data/events";

/**
 * EVT-04 — Event Gallery.
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
        // Placeholder state — shown until real event photos are provided
        <div className="rounded-2xl border border-hairline bg-[var(--color-background)] px-8 py-16 text-center">
          <p className="text-sm text-[var(--color-secondary)] opacity-60">
            {/* [PLACEHOLDER — EVENT PHOTO] */}
            Event photos coming soon.
          </p>
        </div>
      ) : (
        <>
          {/*
            Desktop: 3-col grid; first image spans 2 cols (featured).
            Tablet/mobile: 2-col grid, no featured distinction.
          */}
          <div
            className={cn(
              "grid gap-3",
              "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3",
            )}
          >
            {/* Featured — col-span-2 on sm+ */}
            <div
              className={cn(
                "overflow-hidden rounded-2xl ring-1 ring-hairline",
                "col-span-1 sm:col-span-2 lg:col-span-2",
                "aspect-video bg-[var(--color-accent)]/30",
              )}
            >
              <img
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {GALLERY_IMAGES.slice(1).map((img, i) => (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-2xl ring-1 ring-hairline",
                  "aspect-square bg-[var(--color-accent)]/30",
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
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
