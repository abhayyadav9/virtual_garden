import { useEffect, useState } from "react"; // Import useState and useEffect for state management and side effects
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

// ReviewCard component to display individual event information
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Main Event component to display events
export function Event() {
  const [upcomingEvents, setUpcomingEvents] = useState([]); // State for upcoming events
  const [pastEvents, setPastEvents] = useState([]); // State for past events

  // Function to fetch events from the API
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v3/event/view-events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      const now = new Date();

      // Separate events into upcoming and past
      const upcoming = data.events.filter(event => new Date(event.date) > now);
      const past = data.events.filter(event => new Date(event.date) <= now);

      setUpcomingEvents(upcoming);
      setPastEvents(past);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h1 className="font-bold">Upcoming Events</h1>
      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {upcomingEvents.map((event) => (
          <ReviewCard
            key={event._id}
            img="https://via.placeholder.com/32" // Placeholder image, replace with actual if available
            name={event.name}
            username={`@${event.username || "event"}`} // Fallback username if not available
            body={event.description}
          />
        ))}
      </Marquee> */}
      <Marquee  pauseOnHover className="[--duration:20s]">
        {pastEvents.map((event) => (
          <ReviewCard
            key={event._id}
            img="https://via.placeholder.com/32" // Placeholder image, replace with actual if available
            name={event.name}
            username={`@${event.username || "event"}`} // Fallback username if not available
            body={event.description}
          />
        ))}
      </Marquee>

      <h1 className="font-bold">Past Events</h1>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {pastEvents.map((event) => (
          <ReviewCard
            key={event._id}
            img="https://via.placeholder.com/32" // Placeholder image, replace with actual if available
            name={event.name}
            username={`@${event.username || "event"}`} // Fallback username if not available
            body={event.description}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
