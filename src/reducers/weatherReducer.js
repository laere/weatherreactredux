import { FETCH_WEATHER } from 'actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
