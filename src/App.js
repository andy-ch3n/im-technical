import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "./config";
import {zipCodeState } from "./atoms.js";
import Dashboard from "./components/Dashboard";
import { DailyForecasts } from "./dummyData";


function App() {

  const [zipCode, setZipCode] = useRecoilState(zipCodeState)




  return (
    <div className="App">
      <h1>Andy's Weather App</h1>
      <br />
      {zipCode ? (
        <Dashboard
        />
      ) : (
        <SearchBar/>
      )}
    </div>
  );
}

export default App;
