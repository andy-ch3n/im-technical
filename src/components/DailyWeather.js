import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloudIcon from "@mui/icons-material/Cloud";
import InvertColorsIcon from "@mui/icons-material/InvertColors";

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
      <Paper
        sx={{
          maxWidth: 500,
          my: 1,
          mx: "auto",
          p: 2,
          border: "solid",
          elevation: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ paddingRight: 2 }}>
              <Avatar colorDefault="black">
                {monthDate[0]}/{monthDate[1]}
              </Avatar>
            </Typography>
            <Typography variant="h6">
              {" "}
              <b>{maximum}°</b>/{minimum}°{" "}
            </Typography>
          </Box>
          <Typography>
            {iconPhrase.toLowerCase().includes("sunny") ? (
              <LightModeIcon style={{ fill: "#FFA500" }} />
            ) : (
              ""
            )}
            {iconPhrase.toLowerCase().includes("cloud") ? <CloudIcon /> : ""}
          </Typography>
          <Typography>{iconPhrase}</Typography>
          <Typography sx={{}}>
            {precipitation ? (
              <>There's a chance of rain</>
            ) : (
              <p>0% chance of rain</p>
            )}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
