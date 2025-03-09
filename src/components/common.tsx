import "../App.css";

interface CommonProps {
  title: string; // Change type if needed
}

export default function Common(props: CommonProps) {
  const { title } = props;
  return (
    <div className="box trigger" onClick={() => alert("HELLO")}>
      {title}
    </div>
  );
}
