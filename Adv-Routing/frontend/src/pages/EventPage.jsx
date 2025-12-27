import { Await, useLoaderData } from "react-router";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return;
  <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
    <Await resolve={events}>{() => <EventsList events={loadEvents} />}</Await>
  </Suspense>;
};
export default EventPage;

export async function loadEvents() {
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

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
