import { useLoaderData, useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventForm method="PATCH" event={data.event} />;
};

export default EditEventPage;
