import { useState, useEffect } from "react";
import { DigitalClock, CurrentDate } from "./components/index";

const App = () => {
  const [event, setEvent] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEvent(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addSuffix = (number) => {
    if (number >= 11 && number <= 13) {
      return number + "th";
    }
    switch (number % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
      default:
        return number + "th";
    }
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col flex-wrap h-screen w-full justify-center items-center">
      <DigitalClock event={event} />
      <CurrentDate event={event} addSuffix={addSuffix} />
    </div>
  );
};

export default App;
