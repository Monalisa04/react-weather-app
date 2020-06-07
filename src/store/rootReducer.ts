import { combineReducers } from "redux";
import LandingReducer from "../features/landing/reducer/landing-reducer";
import WeatherReducer from "../features/weather/reducer/weather-reducer";

const rootReducer = combineReducers({
  landing: LandingReducer,
  weather: WeatherReducer
});

export default rootReducer;
