import { combineReducers } from 'redux';
import weatherReducer from 'reducers/weatherReducer';

export default combineReducers({
  weather: weatherReducer
});
