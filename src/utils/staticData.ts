// Define the correct type for events
interface EventType {
  id: string;
  source: { type: string; title: string };
  target: { type: string; title: string };
}

export const allEvents = [
  {
    id: 1,
    type: "common",
    title: "Amazon SQS",
  },
  {
    id: 2,
    type: "common",
    title: "Amazon AWS",
  },
  {
    id: 3,
    type: "common",
    title: "End",
  },
  {
    id: 4,
    type: "try_catch",
    title: "Try Catch Finally",
  },
  {
    id: 5,
    type: "loop",
    title: "If Else",
  },
];

export const initialEvents: EventType[] = [
  {
    id: "1=>2",
    source: { type: "common", title: "Trigger" },
    target: { type: "common", title: "Amazon SQS" },
  },
  {
    id: "2=>3",
    source: { type: "common", title: "Amazon AWS" },
    target: { type: "common", title: "End" },
  },
];
