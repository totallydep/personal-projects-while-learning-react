import { useEffect, useState, useRef } from "react";
import Button from "./Buttons/Button";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 10, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showPlay, setShowPlay] = useState(true);
  const timerRef = useRef(null);

  const formatValue = (value) => (value < 10 ? `0${value}` : value);

  const lessThanOne = time.minutes < 1;
  const allNone = time.minutes === 0 && time.seconds === 0;

  const updateTimer = () => {
    setTime((prevTime) => {
      const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
      const newMinutes =
        prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;

      // Update document title
      document.title = `${formatValue(newMinutes)}:${formatValue(newSeconds)}`;

      if (newMinutes === 0 && newSeconds === 0) {
        clearInterval(timerRef.current);
        setIsPlaying(false);
      }

      return { minutes: newMinutes, seconds: newSeconds };
    });
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(updateTimer, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handleReset = () => {
    setShowPlay(true);
    setTime({ minutes: 10, seconds: 0 });
    setIsPlaying(false);
    setShowReset(false);
    document.title = "Timer"; // Reset the title when resetting
  };

  const handlePlayAndPause = () => {
    setShowReset(true);
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="py-4 px-16 rounded bg-teal-300/40">
      <h2
        className={`text-[6rem] text-center font-bold ${
          allNone
            ? "text-gray-800"
            : lessThanOne
            ? "text-red-400"
            : "text-white"
        }`}
      >{`${formatValue(time.minutes)}:${formatValue(time.seconds)}`}</h2>
      <div className="flex items-center gap-4 justify-center">
        {showReset && (
          <Button
            title={"Reset"}
            handleClick={handleReset}
            customStyles={`bg-red-400 hover:bg-red-900 hover:text-white`}
          />
        )}
        {showPlay && !allNone && (
          <Button
            title={isPlaying ? "Pause" : "Play"}
            handleClick={handlePlayAndPause}
            customStyles={`bg-blue-400 hover:bg-blue-900 hover:text-white`}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
