import { useState, useEffect } from "react";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";

const apiKey = (import.meta.env.VITE_WEATHER_API_KEY)

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });

  // Format current date
  const toDate = () => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December",
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];
    const currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
  };

  // Search weather by city
  const search = async (event) => {
    event.preventDefault();
    if ((event.type === "click" || event.key === "Enter") && query !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();

        if (!response.ok) {
          setWeather({ data: {}, loading: false, error: true });
        } else {
          setWeather({ data: jsonResponse, loading: false, error: false });
        }
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.error("Error fetching weather data:", error);
      }
    } else {
      alert("Please enter a city name...");
    }
  };

  // Fetch default weather data for Delhi on component mount
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Varanasi&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setWeather({ data: jsonResponse, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.error("Error fetching default weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Search Component */}
      <Search query={query} setQuery={setQuery} search={search} />

      {weather.loading && (
        <>
          <br />
          <br />
          <h4>Searching...</h4>
        </>
      )}

      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <span style={{ fontFamily: "font" }}>
              Sorry, city not found. Please try again.
            </span>
          </span>
        </>
      )}

      {weather.data && !weather.loading && !weather.error && (
        // Forecast Component
        <Forecast weatherData={weather} toDate={toDate} />
      )}
    </div>
  );
}

export default App;
