import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import { useState } from "react";
import Button from "./components/Buttons/Button";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center gap-8 py-12">
      <div className="flex gap-1 border-2 border-gray-400 bg-gray-600 rounded-3xl">
        <Button
          title={`Timer`}
          handleClick={handleToggle}
          customStyles={
            `${toggle ? "bg-gray-800 text-white" : "bg-gray-600"}` +
            " " +
            "hover:bg-gray-800/50  hover:text-white "
          }
        />
        <Button
          title={`Stopwatch`}
          handleClick={handleToggle}
          customStyles={
            `${!toggle ? "bg-gray-800 text-white" : "bg-gray-600"}` +
            " " +
            "hover:bg-gray-800/50 hover:text-white "
          }
        />
      </div>
      {toggle && <Timer />}
      {!toggle && <Stopwatch />}
    </div>
  );
}

export default App;
