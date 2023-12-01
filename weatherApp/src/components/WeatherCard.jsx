import React from "react";
import { FaDroplet } from "react-icons/fa6";
import { WiWindy } from "react-icons/wi";

const WeatherCard = ({ data, weatherIcon }) => {
  return (
    <div className="text-center mt-4">
      <div className="w-1/2 mx-auto">{weatherIcon}</div>
      <h1 className="text-6xl font-semibold">
        {data.main && data.main.temp}°C
      </h1>
      <h2 className="text-2xl font-semibold">
        {data.weather && data.weather[0].main}
      </h2>
      <h3 className="">{data.name && `${data.name}, ${data.sys.country}`}</h3>

      <hr className="border-[1px] border-black/30 my-4 " />

      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-1">
            <WiWindy size={30} />
            <h2 className="text-sm">{data.name && data.wind.speed} km/h</h2>
          </div>
          <h4 className=" font-semibold">Wind Speed</h4>
        </div>

        <div className="">
          <div className="flex items-center gap-1 ">
            <FaDroplet />
            <h2 className="text-sm">{data.main && data.main.humidity}%</h2>
          </div>
          <h4 className=" font-semibold">Humidity</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
