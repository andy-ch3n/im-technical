import axios from 'axios'
import {KEY} from '../config'


export const getLocationKey = async (zipCode) => {
  const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}&apikey=${KEY.API_KEY}`)
  return response.data[0].Key
}

export const getWeatherData = async (locationKey) => {
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${KEY.API_KEY}`)
        return response.data.DailyForecasts
  }

