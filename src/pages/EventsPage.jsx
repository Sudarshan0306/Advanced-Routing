import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENT = [
  { id: "e1", title: "Some Event" },
  { id: "e2", title: "Another Event" },
  { id: "e3", title: "Differen Event" },
  { id: "e4", title: "Dangerous Event" },
];

const EventsPage = () => {
  return (
    <div>
      <ul>
        {DUMMY_EVENT.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
