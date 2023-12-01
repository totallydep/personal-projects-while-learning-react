import React, { useEffect, useState } from "react";
import { Windy, NoIcon, Sunny, Snowy, Cloudy, Rainy } from "./components/Icons";
import InputField from "./components/InputField";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "6eaa45d8e9bce90f1f3f7b3945ddbb2f";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return <Sunny />;
    case "Clouds":
      return <Cloudy />;
    case "Windy":
    case "Rain":
    case "Drizzle":
      return <Rainy />;
    case "Snow":
      return <Snowy />;
    default:
      return <NoIcon />;
  }
};

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [isValidCity, setIsValidCity] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState(NoIcon);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (city === "") {
      setIsValidCity(false);
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (response.status === 404) {
        setIsValidCity(false);
        throw new Error("City not found");
      }

      const result = await response.json();
      setData(result);
      setIsValidCity(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setIsValidCity(false);
    }

    setCity("");
  };

  useEffect(() => {
    const weather = data.weather && data.weather[0].main;
    setWeatherIcon(getWeatherIcon(weather));
  }, [data]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-sm max-w-sm w-full">
        <InputField city={city} setCity={setCity} handleSearch={handleSearch} />
        {data.name && <WeatherCard data={data} weatherIcon={weatherIcon} />}
        {!isValidCity && (
          <p className="text-red-500 font-thin">Enter a valid city name.</p>
        )}
      </div>
    </div>
  );
};

export default App;
