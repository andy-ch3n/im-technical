import axios from 'axios'
import {API_KEY} from '../config'


export const getLocationKey = async (zipCode) => {
  const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?q=${zipCode}&apikey=${API_KEY}`)
  console.log('locationKey', response.data[0].Key)
  return response.data[0].Key
}

export const getWeatherData = async (locationKey) => {
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
        console.log('forecastData', response.data.DailyForecasts)
        return response.data.DailyForecasts
  }

