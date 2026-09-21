import PageContainer from "@/components/layout/PageContainer";
import SEO from "@/components/shared/SEO";
import { siteUrl } from "@/config/site";
import EventsHeader  from "@/components/sections/events/EventsHeader";
import UpcomingEvents from "@/components/sections/events/UpcomingEvents";
import PastEvents    from "@/components/sections/events/PastEvents";
import EventGallery  from "@/components/sections/events/EventGallery";

export default function Events() {
  return (
    <PageContainer>
      <SEO
        title="Events"
        description="Explore KWT community sessions, workshops, and Q&A events. Join us for networking, learning, and professional development opportunities for Kashmiri women in technology."
        url={siteUrl("/events")}
        keywords="KWT events, tech workshops, community sessions, networking events, women in tech events"
      />
      <EventsHeader />
      <UpcomingEvents />
      <PastEvents />
      <EventGallery />
    </PageContainer>
  );
}
