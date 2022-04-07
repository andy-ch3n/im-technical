import { atom } from "recoil";


 const zipCodeState = atom({
  key: "zipCodes",
  default: "",
});

 const locationKeyState = atom({
  key: "locationKey",
  default: "",
});

 const weatherDataState = atom({
  key: "weatherData",
  default: [],
});



export {zipCodeState, locationKeyState, weatherDataState}