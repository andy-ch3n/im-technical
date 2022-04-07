import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Location from "@mui/icons-material/LocationSearching";
import axios from "axios";
import API_KEY from "../config.js";
import { isClickedState, zipCodeState, weatherDataState } from "../atoms";
import { useQuery } from "react-query";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { getWeatherData, getLocationKey } from "../lib/api";




export default function SearchBar() {

  const [zipCode, setZipCode] = useRecoilState(zipCodeState)
  const [isClicked, setIsClicked] = useRecoilState(isClickedState)
  const [weatherData, setWeatherData] = useRecoilState(weatherDataState);




  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true)
  }


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
    data: forecastData,
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
    setWeatherData(forecastData)
  },[weatherData])




  return (
    <>
      <Box sx={{height: '70vh', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h6" sx={{paddingBottom: 2}}>Enter any zip code to see the 5 day forecast</Typography>
        <form
          onSubmit={handleSubmit}
          className="center"
          id="form"
          type="submit"
        >
          <TextField
            name="zipcode"
            type="number"
            size="small"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{backgroundColor: "#FFFFFF"}}
            variant="outlined"
            value={zipCode}
            label="Zipcode"
            placeholder="Search Zipcode..."
            style={{ borderRadius: 12 }}
            onChange={(e) => setZipCode(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            sx={{ marginLeft: 2}}
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
