import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router";

const EventRoot = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventRoot;
