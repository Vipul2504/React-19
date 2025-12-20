import { useParams } from "react-router";

const EventDetailPage = () => {
  const param = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>current event :{param.eventId} </p>
    </>
  );
};

export default EventDetailPage;
