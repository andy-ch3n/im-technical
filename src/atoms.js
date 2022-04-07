import { atom, useRecoilState } from "recoil";


 const zipCodeState = atom({
  key: "zipCodes",
  default: "",
});

 const weatherDataState = atom({
  key: "weatherData",
  default: [],
});

const isClickedState = atom({
  key: "isClicked",
  default: false,
});


export {zipCodeState, weatherDataState, isClickedState}