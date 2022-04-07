import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Location from "@mui/icons-material/LocationSearching";
import axios from "axios";
import API_KEY from "../config.js";
import { zipCodeState, locationKeyState, weatherDataState } from "../atoms";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export default function SearchBar({zipCode, setZipCode, setIsClicked}) {
  // const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  // const locationKey = useRecoilState(locationKeyState);
  // const weatherData = useRecoilState(weatherDataState);

  // const setLocationKey = useSetRecoilState(locationKeyState);
  // const setWeather = useSetRecoilState(weatherDataState);

  function handleSubmit(e) {
    e.preventDefault();
    setIsClicked(true)
  }

  return (
    <>
      <Box sx={{height: '70vh', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography sx={{paddingBottom: 2}}>Enter any zip code to see the 5 day forecast</Typography>
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
            size="small"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            color="success"
            border
            variant="outlined"
            value={zipCode}
            label="Zipcode"
            placeholder="Search Zipcode..."
            style={{ borderRadius: 12 }}
            onChange={(e) => setZipCode(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            sx={{ marginLeft: 2, marginTop: 1 }}
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
