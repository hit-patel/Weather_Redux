import axios from "axios";
const API_KEY ="136b2876526b4f8996ee00497240fce4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'Fetch_Weather';

export  function fetchWeather (city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request= axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload:request
  };
}
