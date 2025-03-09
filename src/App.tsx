import { useState } from "react";
import "./App.css";
import PlusLine from "./components/plusLine";
import { initialEvents } from "./utils/staticData";
import Common from "./components/common";
import End from "./components/end";

// Define the correct type for events
interface EventType {
  id: string;
  source: { type: string; title: string };
  target: { type: string; title: string };
}

function App() {
  const [selectedEvents, setSelectedEvents] =
    useState<EventType[]>(initialEvents);

  return (
    <body>
      <div className="container">
        {selectedEvents.map((event, index) => (
          <>
            <Common title={event.source.title} />
            <PlusLine uid={event?.id} setSelectedEvents={setSelectedEvents} />
            {event?.target?.title == "End" ? (
              <End />
            ) : (
              <Common title={event.target.title} />
            )}
            {index < selectedEvents.length - 1 && (
              <PlusLine uid={event?.id} setSelectedEvents={setSelectedEvents} />
            )}
          </>
        ))}
      </div>
    </body>
  );
}

export default App;
