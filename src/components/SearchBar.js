import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Location from "@mui/icons-material/LocationSearching";
import axios from "axios";
import API_KEY from "../config.js";
import { zipCodeState, locationKeyState, weatherDataState } from "../atoms";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export default function SearchBar() {
  const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  const locationKey = useRecoilState(locationKeyState);
  const weatherData = useRecoilState(weatherDataState);

  const setLocationKey = useSetRecoilState(locationKeyState);
  const setWeather = useSetRecoilState(weatherDataState);

  function handleSubmit(e) {
    e.preventDefault();
    var config = {
      method: "get",
      url: `http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}&apikey=${API_KEY.TOKEN}`,
      headers: {},
    };

    const getLocationKey = () => {
      axios(config)
        .then(function(response) {
          console.log("123", response);
          setLocationKey(response.data[0].Key);
        })
        .catch(function(error) {
          console.log(error);
          return null;
        });
    };

    var weatherConfig = {
      method: "get",
      url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/90277?apikey=${API_KEY.TOKEN}`, //have to make locationkey dynamic but its taking too long for state to update
      headers: {},
    };

    const getWeather = () => {
      // 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/37972_PC?apikey=lJGHEoCWyTADK3uaTY9atMEOHSOlgel6',

      axios(weatherConfig)
        .then(function(response) {
          setWeather(response.data);
        })
        .catch(function(error) {
          console.log(error);
          return null;
        });
    };

    getLocationKey();
    getWeather();

    console.log(weatherData)
  }

  return (
    <>
      <Box>
        <form
          onSubmit={handleSubmit}
          className="center"
          id="form"
          type="submit"
        >
          <TextField
            name="zipcode"
            type="number"
            id="zipcode"
            value={zipCode}
            placeholder="Search Zipcode..."
            style={{ borderRadius: 12 }}
            onChange={(e) => setZipCode(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            style={{ marginLeft: 15 }}
            variant="contained"
            className="button"
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}
