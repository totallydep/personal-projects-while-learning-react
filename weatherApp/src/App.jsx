import { useEffect, useState } from "react";
import { WeatherInfo, WeatherInput, Card } from "./components";
function App() {
  const [city, setCity] = useState("berlin");
  const [weather, setWeather] = useState(null);

  const fetchNewWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=6eaa45d8e9bce90f1f3f7b3945ddbb2f`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    console.log(weather);
  };

  const handleClick = () => {
    fetchNewWeather();
  };

  useEffect(() => {
    fetchNewWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white font-bold">Weather App</h1>
      <WeatherInput />
      <WeatherInfo />
    </div>
  );
}

export default App;
