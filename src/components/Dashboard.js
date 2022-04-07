import React from 'react'
import {DailyForecasts} from '../dummyData'
import DailyWeather from './DailyWeather'
import { Button, TextField, Typography } from "@mui/material";




export default function Dashboard({weatherForecast, zipCode}) {

  console.log(DailyForecasts)

  var myDate = new Date(1649253600*1000); //convert epoch to date
  console.log(myDate.toLocaleString());

  return (
    <>
    <Typography sx={{paddingTop: 8}}>All degrees is in fahrenheit</Typography>
    <Typography>Next 5 day forecast for {zipCode} </Typography>
    <br/>
    {DailyForecasts.map(days => (
      <DailyWeather iconPhrase={days.IconPhrase} precipitation={days.Night.HasPrecipitation} date={days.EpochDate} maximum={days.Temperature.Maximum.Value} minimum={days.Temperature.Minimum.Value}/>
    ))}
    </>
    )



}
