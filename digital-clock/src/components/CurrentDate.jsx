const CurrentDate = ({ event, addSuffix }) => {
  // variables
  const year = event.getFullYear();
  const month = event.toLocaleString("default", { month: "long" });
  const day = event.toLocaleString("default", { weekday: "long" });

  const date = event.getDate();
  const formattedDate = addSuffix(date);

  return (
    <div>
      <h2 className="text-4xl font-bold">{`${day}, ${formattedDate}  ${month}  ${year}`}</h2>
    </div>
  );
};

export default CurrentDate;
