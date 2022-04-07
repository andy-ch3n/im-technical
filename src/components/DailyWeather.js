import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LightModeIcon from '@mui/icons-material/LightMode';

export default function DailyWeather({
  precipitation,
  date,
  maximum,
  minimum,
  iconPhrase,
}) {
  const convertDate = (date) => {
    var myDate = new Date(date * 1000); //convert epoch to date
    return myDate.toLocaleString();
    myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  let convertedDate = convertDate(date);
  let monthDate = convertedDate.split("/");

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2, border: 'solid', elevation: 2 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center',}}>
        <Typography sx={{paddingRight: 2}}>
          <Avatar colorDefault="black">
            {monthDate[0]}/{monthDate[1]}
          </Avatar>
        </Typography>
        <Typography variant="h6">
          {" "}
          <b>{maximum}°</b>/{minimum}°{" "}
        </Typography>
        </Box>
        <Typography sx={{mr:6}}>
          {iconPhrase !== 1 ? <LightModeIcon style={{ fill: '#FFA500' }}/> : <p>Not sunny</p>}
        </Typography>
        <Typography sx={{}}>
        {precipitation ? <>Chance of rain</> : <>0%</>}
        </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
