import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import Hero        from "@/components/sections/home/Hero";
import AboutKWT    from "@/components/sections/home/AboutKWT";
import Impact      from "@/components/sections/home/Impact";
import GetInvolved from "@/components/sections/home/GetInvolved";
import JoinCTA     from "@/components/sections/home/JoinCTA";

export default function Home() {
  return (
    <PageContainer>
      <SEO
        title="Home"
        description="KWT is a community of Kashmiri women in technology. We provide mentorship, networking opportunities, career resources, and support to help women thrive in tech careers."
        url="https://kwtcommunity.org/"
        keywords="Kashmir women tech community, women in tech Kashmir, tech mentorship"
      />
      <Hero />
      <AboutKWT />
      <Impact />
      <GetInvolved />
      <JoinCTA />
    </PageContainer>
  );
}
