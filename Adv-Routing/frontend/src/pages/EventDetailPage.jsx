import {
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw JSON({ message: "Could not fetch selected event" });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  const response = fetch("http://localhost:8080/events" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw JSON({ message: "Could not delete Event" }, { status: 500 });
  }
  return redirect("/events");
}
