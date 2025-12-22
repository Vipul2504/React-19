import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

const EventPage = () => {
  const events = useLoaderData();
  return <EventsList events={events} />;
};

export default EventPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetched events" }),
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
