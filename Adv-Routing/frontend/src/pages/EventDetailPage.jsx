import { useParams } from "react-router";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const param = useParams();
  return (
    <>
      <EventItem event={event.id} />
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  fetch("http://localhost:8080/events/" + id);
}
