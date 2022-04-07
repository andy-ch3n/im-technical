import React from 'react'
import DailyWeather from './DailyWeather'
import { TextField, Typography } from "@mui/material";




export default function Dashboard({weatherForecast, zipCode}) {


  var myDate = new Date(1649253600*1000); //convert epoch to date

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


