import PageContainer from "@/components/layout/PageContainer";
import EventsHeader  from "@/components/sections/events/EventsHeader";
import UpcomingEvents from "@/components/sections/events/UpcomingEvents";
import PastEvents    from "@/components/sections/events/PastEvents";
import EventGallery  from "@/components/sections/events/EventGallery";

export default function Events() {
  return (
    <PageContainer>
      <EventsHeader />
      <UpcomingEvents />
      <PastEvents />
      <EventGallery />
    </PageContainer>
  );
}
