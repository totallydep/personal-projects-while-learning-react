const DigitalClock = ({ event }) => {
  const formattedTime = event.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div>
      <h1 className="text-8xl font-bold">{formattedTime}</h1>
    </div>
  );
};

export default DigitalClock;
