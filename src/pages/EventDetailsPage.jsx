import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";


const EventDetailsPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailsPage;

export const loader = async ({request, params}) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  }
  return response;
};
