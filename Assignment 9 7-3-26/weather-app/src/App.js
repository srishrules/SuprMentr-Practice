import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    // Prevent numbers / invalid input
    if (!/^[A-Za-z ]+$/.test(city)) {
      setError("Please enter a valid city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      const weatherData = await weatherRes.json();

      setWeather({
        name,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
      });
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    }

    setLoading(false);
  };

  return (
    <div style={{
      backgroundColor: "#ffe6f0",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "#e6ccff",
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }}>
        <h2>Weather Dashboard</h2>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#fff0f5",
            outline: "none"
          }}
        />

        <button
          onClick={fetchWeather}
          style={{
            backgroundColor: "#b366ff",
            color: "white",
            padding: "10px",
            width: "95%",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Get Weather
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div>
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.temp}°C</p>
            <p>Wind Speed: {weather.wind} km/h</p>
          </div>
        )}
      </div></div>
  );
}

export default App;