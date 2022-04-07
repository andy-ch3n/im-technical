import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Location from "@mui/icons-material/LocationSearching";
import axios from "axios";
import API_KEY from "../config.js";
import { zipCodeState, locationKeyState, weatherDataState } from "../atoms";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export default function SearchBar({zipCode, setZipCode}) {
  // const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  // const locationKey = useRecoilState(locationKeyState);
  // const weatherData = useRecoilState(weatherDataState);

  // const setLocationKey = useSetRecoilState(locationKeyState);
  // const setWeather = useSetRecoilState(weatherDataState);

  function handleSubmit(e) {
    e.preventDefault();

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
