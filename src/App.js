import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { weatherDataState, locationKeyState } from "./atoms.js";
import Dashboard from "./components/Dashboard";
import { getWeatherData, getLocationKey } from "./lib/api";

function App() {
  const [zipCode, setZipCode] = useState("");
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const {
    isLoading: isLocationKeyLoading,
    error: locationKeyError,
    data: locationKey,
  } = useQuery(
    ["locationKey", zipCode],
    () => {
      return getLocationKey(zipCode);
    },
    {
      enabled: !!zipCode && isClicked,
    }
  );

  const {
    isLoading: isWeatherLoading,
    error: weatherError,
    data: weatherData,
  } = useQuery(
    ["weatherData", locationKey],
    () => {
      return getWeatherData(locationKey);
    },
    {
      enabled: !!locationKey,
    }
  );

  useEffect(() => {
    setWeatherForecast(weatherData);
  }, [weatherData]);

  return (
    <div className="App">
      <h1>Andy's Weather App</h1>
      <br />
      {weatherData ? (
        <Dashboard
          zipCode={zipCode}
          weatherForecast={weatherData}
          setWeatherForecast={setWeatherForecast}
        />
      ) : (
        <SearchBar
          setIsClicked={setIsClicked}
          setZipCode={setZipCode}
          zipCode={zipCode}
        />
      )}
    </div>
  );
}

export default App;
