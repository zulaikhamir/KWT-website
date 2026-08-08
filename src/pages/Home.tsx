import Hero       from "@/components/sections/Hero";
import AboutKWT   from "@/components/sections/AboutKWT";
import Impact     from "@/components/sections/Impact";
import GetInvolved from "@/components/sections/GetInvolved";
import JoinCTA    from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutKWT />
      <Impact />
      <GetInvolved />
      <JoinCTA />
    </main>
  );
}
