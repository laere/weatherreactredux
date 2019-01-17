import { FETCH_WEATHER } from 'actions/types';
import axios from 'axios';

export const fetchWeather = location => async dispatch => {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: location,
      APPID: '34061ce86bfda355e56b98b6d018e56c'
    }
  });

  dispatch({
    type: FETCH_WEATHER,
    payload: response.data
  });
};
