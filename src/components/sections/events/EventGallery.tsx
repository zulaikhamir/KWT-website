import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/data/events";

export default function EventGallery() {
  return (
    <SectionWrapper divided id="gallery">
      <SectionHeading
        align="center"
        eyebrow="Community moments"
        title="Moments from KWT"
        description="A few moments from the people, conversations, and sessions that make KWT."
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
            A few moments from KWT events and sessions. More to come.
          </p>
        </>
      )}
    </SectionWrapper>
  );
}
