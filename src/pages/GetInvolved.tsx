import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import { siteUrl } from "@/config/site";
import Header from "@/components/sections/get-involved/Header";
import MembershipPathsSection from "@/components/sections/shared/MembershipPathsSection";
import Volunteer from "@/components/sections/get-involved/Volunteer";
import PartnerWithUs from "@/components/sections/get-involved/PartnerWithUs";
import SponsorKWT from "@/components/sections/get-involved/SponsorKWT";
import WhatHappensNext from "@/components/sections/get-involved/Process";
import FAQ from "@/components/sections/get-involved/FAQ";

export default function GetInvolved() {
  return (
    <PageContainer>
      <SEO
        title="Get Involved"
        description="Join KWT as a member, volunteer, partner, or sponsor. Help us empower Kashmiri women in technology through mentorship, networking, and career opportunities."
        url={siteUrl("/get-involved")}
        keywords="join KWT, become a member, volunteer opportunities, partnership, sponsorship, support women in tech"
      />
      <Header />
      <MembershipPathsSection />
      <Volunteer />
      <PartnerWithUs />
      <SponsorKWT />
      <WhatHappensNext />
      <FAQ />
    </PageContainer>
  );
}
