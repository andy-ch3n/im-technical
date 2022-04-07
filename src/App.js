import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "./config";
import { weatherDataState, locationKeyState } from "./atoms.js";
import WeatherDashboard from "./components/WeatherDashboard";
import { getWeatherData, getLocationKey } from "./lib/api";

function App() {
  const [zipCode, setZipCode] = useState(null);
  // const [locationKey, setLocationKey] = useState(null)

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
      enabled: !!zipCode,
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

  // if (weatherError) return <h1>Error, try again or try another zip code</h1>;
  // if (isWeatherLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1>Andy's Weather App</h1>
      <div>Enter any zip code to see the 7 day forecast</div>
      <br />
      <WeatherDashboard />
      <SearchBar setZipCode={setZipCode} zipCode={zipCode} />
    </div>
  );
}

export default App;
