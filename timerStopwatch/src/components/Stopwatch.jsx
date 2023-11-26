import { useEffect, useState, useRef } from "react";
import Button from "./Buttons/Button";

const Stopwatch = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, miliseconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showPlay, setShowPlay] = useState(true);
  const timerRef = useRef(null);

  const formatValue = (value) => (value < 10 ? `0${value}` : value);

  const updateTimer = () => {
    setTime((prevTime) => {
      // Check if elapsed time is 10 minutes
      if (prevTime.minutes === 10) {
        setIsPlaying(false);
        setShowPlay(false);
        setShowReset(true);
        clearInterval(timerRef.current);
        return prevTime; // Return the current time
      }

      // Calculate the new time
      // 00:00:00
      const newMilliseconds =
        prevTime.miliseconds === 99 ? 0 : prevTime.miliseconds + 1;
      // 00:00:99
      // 00:01:00
      const newSeconds =
        prevTime.seconds === 59 && prevTime.miliseconds === 99
          ? 0
          : prevTime.miliseconds === 99
          ? prevTime.seconds + 1
          : prevTime.seconds;
      // 00:59:99
      // 01:00:00
      const newMinutes =
        prevTime.seconds === 59 && prevTime.miliseconds === 99
          ? prevTime.minutes + 1
          : prevTime.minutes;

      // Update document title
      document.title = `${formatValue(newMinutes)}:${formatValue(
        newSeconds
      )}:${formatValue(newMilliseconds)}`;

      return {
        minutes: newMinutes,
        seconds: newSeconds,
        miliseconds: newMilliseconds,
      };
    });
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(updateTimer, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handleReset = () => {
    setShowPlay(true);
    setTime({ minutes: 0, seconds: 0, miliseconds: 0 });
    setIsPlaying(false);
    setShowReset(false);
    document.title = "Stopwatch"; // Reset the title when resetting
  };

  const handlePlayAndPause = () => {
    setShowReset(true);
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="py-8 px-8 rounded bg-indigo-300/40">
      <h2 className={`text-[5rem] text-center font-bold text-white`}>
        {`${formatValue(time.minutes)}:${formatValue(
          time.seconds
        )}:${formatValue(time.miliseconds)}`}
      </h2>
      <div className="flex items-center gap-4 justify-center">
        {showReset && (
          <Button
            title={"Reset"}
            handleClick={handleReset}
            customStyles={`bg-red-400 hover:bg-red-900 hover:text-white`}
          />
        )}
        {showPlay && (
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

export default Stopwatch;
