import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "@/components/events/event-list";

export default function Home(props) {
  return (
    <div>
      <ul>
        <EventList items={props.events} />
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
