import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "./config";
import { weatherDataState, locationKeyState } from "./atoms.js";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  const weatherData = useRecoilState(weatherDataState);
  const locationKey = useRecoilState(locationKeyState);


  // const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  // // const { isLoading, error, data} = useQuery('fetchingKey', getLocationKey)
  // var config = {
  //   method: "get",
  //   url:
  //     `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}&apikey=${API_KEY}`,
  //   headers: {},
  // };

  // const getLocationKey = () => {
  // axios(config)
  //   .then(function(response) {
  //     return (JSON.stringify(response.data));
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //     return null
  //   });

  // }

  // if (error) return <h1>Error, try again or try another zip code</h1>;
  // if (isLoading) return <h1>Loading...</h1>

  // console.log(data)

  console.log(locationKey)

  return (
    <div className="App">
      <h1>Andy's Weather App</h1>
      <div>Enter any zip code to see the 7 day forecast</div>
      <br />
      
      {locationKey  ? <WeatherDashboard /> : <SearchBar />}
    </div>
  );
}

export default App;
