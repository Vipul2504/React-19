import { redirect } from "react-router";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm method="POST" />;
};

export default NewEventPage;
