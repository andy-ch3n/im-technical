import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "./config";
import { weatherDataState, locationKeyState } from "./atoms.js";
import Dashboard from "./components/Dashboard";
import { getWeatherData, getLocationKey } from "./lib/api";
import {DailyForecasts} from './dummyData'

function App() {
  const [zipCode, setZipCode] = useState(null);
  // const [locationKey, setLocationKey] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState([])
  const [dummyWeather, setDummyWeather] = useState([])
  const [isClicked, setIsClicked] = useState(false)



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


  // setDummyWeather(DailyForecasts)
  // if (weatherError) return <h1>Error, try again or try another zip code</h1>;
  // if (isWeatherLoading) return <h1>Loading...</h1>;


  return (
    <div className="App">
      <h1>Andy's Weather App</h1>
      <br />
      {weatherData ? <Dashboard weatherForecast={weatherForecast} setWeatherForecast={setWeatherForecast}/> : <SearchBar setIsClicked={setIsClicked} setZipCode={setZipCode} zipCode={zipCode} />}
      {/* <Dashboard zipCode={zipCode} dummyWeather={dummyWeather}/> */}
    </div>
  );
}

export default App;
