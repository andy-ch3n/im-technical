import React from 'react'
import DailyWeather from './DailyWeather'
import { TextField, Typography } from "@mui/material";




export default function Dashboard({weatherForecast, zipCode}) {

  return (
    <>
    <Typography variant="h5" sx={{paddingTop: 8}}>All degrees is in fahrenheit</Typography>
    <Typography variant="h6">Next 5 day forecast for <b style={{color: "black"}}>{zipCode}</b> </Typography>
    <br/>
    {weatherForecast && weatherForecast.map(days => (
      <DailyWeather key={days.id} iconPhrase={days.Day.IconPhrase} precipitation={days.Night.HasPrecipitation} date={days.EpochDate} maximum={days.Temperature.Maximum.Value} minimum={days.Temperature.Minimum.Value}/>
    ))}
    </>
    )
}


