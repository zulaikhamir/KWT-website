import { useCallback, useEffect, useRef, useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import Hero          from "@/components/sections/home/Hero";
import Announcements from "@/components/sections/home/Announcements";
import AboutKWT      from "@/components/sections/home/AboutKWT";
import Impact      from "@/components/sections/home/Impact";
import GetInvolved from "@/components/sections/home/GetInvolved";
import MembershipPathsSection from "@/components/sections/shared/MembershipPathsSection";
import JoinCTA     from "@/components/sections/home/JoinCTA";

export default function Home() {
  // The membership paths ("How would you like to get involved?") stay off the
  // page until a Join KWT button asks for them — revealed inline, not in a modal.
  const [showPaths, setShowPaths] = useState(false);
  const pathsRef = useRef<HTMLDivElement>(null);

  const scrollToPaths = useCallback(() => {
    pathsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Runs after the section has been committed to the DOM, so the ref is set.
  useEffect(() => {
    if (showPaths) scrollToPaths();
  }, [showPaths, scrollToPaths]);

  // Join KWT toggles: open on the first click, close it again on the next.
  const handleJoinClick = useCallback(() => {
    setShowPaths((open) => !open);
  }, []);

  return (
    <PageContainer>
      <SEO
        title="Home"
        description="KWT is a community of Kashmiri women in technology. We provide mentorship, networking opportunities, career resources, and support to help women thrive in tech careers."
        url="https://kwtcommunity.org/"
        keywords="Kashmir women tech community, women in tech Kashmir, tech mentorship"
      />
      <Hero onJoinClick={handleJoinClick} isPathsOpen={showPaths} />
      <Announcements />
      <AboutKWT />
      <Impact />
      <GetInvolved />
      <JoinCTA onJoinClick={handleJoinClick} isPathsOpen={showPaths} />
      {/* scroll-mt clears the sticky navbar, matching section[id] in index.css */}
      {showPaths && (
        <div ref={pathsRef} className="scroll-mt-24">
          <MembershipPathsSection />
        </div>
      )}
    </PageContainer>
  );
}
