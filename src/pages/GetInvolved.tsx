import PageContainer from "@/components/layout/PageContainer";
import Header from "@/components/sections/get-involved/Header";
import BecomeMember from "@/components/sections/get-involved/BecomeMember";
import PartnerWithUs from "@/components/sections/get-involved/PartnerWithUs";
import SponsorKWT from "@/components/sections/get-involved/SponsorKWT";
import WhatHappensNext from "@/components/sections/get-involved/Process";
import FAQ from "@/components/sections/get-involved/FAQ";

export default function GetInvolved() {
  return (
    <PageContainer>
      <Header />
      <BecomeMember />
      <PartnerWithUs />
      <SponsorKWT />
      <WhatHappensNext />
      <FAQ />
    </PageContainer>
  );
}
