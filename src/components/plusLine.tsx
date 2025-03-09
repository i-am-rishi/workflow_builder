import "../App.css";

interface Event {
  id: string;
  source: { type: string; title: string };
  target: { type: string; title: string };
}

interface PlusLineProps {
  uid: string;
  setSelectedEvents: (events: Event[]) => void; // Function accepts an array of Event objects
}

export default function PlusLine({ uid }: PlusLineProps) {
  return (
    <div className="line" onClick={() => console.log("ON_CLICK: ", uid)}>
      <span className="plus">+</span>
    </div>
  );
}
