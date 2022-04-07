import React from 'react'
import DailyWeather from './DailyWeather'
import { TextField, Typography } from "@mui/material";
import {zipCodeState, weatherDataState } from "../atoms.js";
import { atom, useRecoilState, useSetRecoilState } from "recoil";





export default function Dashboard() {


  const [zipCode, setZipCode] = useRecoilState(zipCodeState)
  const [weatherForecast, setWeatherForecast] = useRecoilState(weatherDataState)



  return (
    <>
    <Typography variant="h5" sx={{paddingTop: 8}}>All degrees is in fahrenheit</Typography>
    <Typography>Next 5 day forecast for <b>{zipCode}</b> </Typography>
    <br/>
    {weatherForecast && weatherForecast.map(days => (
      <DailyWeather iconPhrase={days.Day.IconPhrase} precipitation={days.Night.HasPrecipitation} date={days.EpochDate} maximum={days.Temperature.Maximum.Value} minimum={days.Temperature.Minimum.Value}/>
    ))}
    </>
    )
}


