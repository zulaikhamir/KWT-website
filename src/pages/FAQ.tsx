import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import { siteUrl } from "@/config/site";
import FAQSection from "@/components/sections/get-involved/FAQ";

export default function FAQ() {
  return (
    <PageContainer>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about KWT membership, events, volunteering, and how to get involved in the Kashmiri Women in Tech community."
        url={siteUrl("/faq")}
        keywords="KWT FAQ, frequently asked questions, membership questions, community support"
      />
      <FAQSection />
    </PageContainer>
  );
}
