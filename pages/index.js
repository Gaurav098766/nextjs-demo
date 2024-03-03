import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}
