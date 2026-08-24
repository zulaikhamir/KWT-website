import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";

/**
 * Privacy Policy page.
 * [PLACEHOLDER — FINAL PRIVACY POLICY]
 * Replace the placeholder body below with KWT's actual privacy policy once finalised.
 * Do not use a generic template policy — the content must reflect KWT's real data practices.
 */
export default function Privacy() {
  return (
    <PageContainer>
      <SEO
        title="Privacy Policy"
        description="KWT Privacy Policy. Learn how we collect, use, and protect your personal information."
        url="https://kwtcommunity.org/privacy"
      />
      <SectionWrapper id="privacy-policy" className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-6">Privacy Policy</h1>
          <p className="lede mt-7">
            {/* [PLACEHOLDER — FINAL PRIVACY POLICY] */}
            The KWT privacy policy is being finalised. Please check back soon.
          </p>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
}
