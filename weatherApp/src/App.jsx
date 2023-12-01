import { useEffect, useState } from "react";
import { Windy, NoIcon, Sunny, Snowy, Cloudy, Rainy } from "./components/Icons";
import InputField from "./components/InputField";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [data, setData] = useState({});

  const [weatherIcon, setWeatherIcon] = useState(NoIcon);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
    setShowWeather(true);
    setCity("");
  };

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6eaa45d8e9bce90f1f3f7b3945ddbb2f`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    switch (data.weather && data.weather[0].main) {
      case "Clear":
        setWeatherIcon(<Sunny />);
        break;

      case "Clouds":
        setWeatherIcon(<Cloudy />);
        break;

      case "Windy":
        setWeatherIcon(<Windy />);
        break;

      case "Rain":
        setWeatherIcon(<Rainy />);
        break;

      case "Drizzle":
        setWeatherIcon(<Rainy />);
        break;

      case "Snow":
        setWeatherIcon(<Snowy />);
        break;

      default:
        setWeatherIcon(<NoIcon />);
    }
  }, [data]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-sm w-full">
        <InputField city={city} setCity={setCity} handleSearch={handleSearch} />
        {data.name ? (
          <WeatherCard data={data} weatherIcon={weatherIcon} />
        ) : (
          data.name !== city &&
          showWeather && (
            <p className="text-red-500 font-thin">Enter a valid city name.</p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
