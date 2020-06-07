import {
  CURRENT_WEATHER_FETCH_ACTION,
  WEATHER_FORECAST_FETCH_ACTION
} from "../../../common/constants";
import { Weather } from "../weather";

const initialState = {
  current: null,
  forecast: null,
  error: {
    isError: false,
    errorMsg: null
  }
};
const WeatherReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CURRENT_WEATHER_FETCH_ACTION.init:
      let initState = Object.assign({}, state);
      initState.loading = true;
      initState.current = null;
      return initState;
    case CURRENT_WEATHER_FETCH_ACTION.success:
      let currentWeatherState = Object.assign({}, state);
      currentWeatherState.loading = false;
      currentWeatherState.current = getCurrentWeatherDataFromResponse(
        action.data
      );
      return currentWeatherState;
    case WEATHER_FORECAST_FETCH_ACTION.success:
      let forecastState = Object.assign({}, state);
      forecastState.loading = false;
      forecastState.forecast = new Map<Date, Weather>();
      let cnt = 0;
      for (let forecast of action.data) {
        if (cnt < 6) {
          forecastState.forecast.set(
            new Date(forecast.valid_date),
            getCurrentWeatherDataFromResponse(forecast)
          );
        }
        cnt++;
      }

      return forecastState;
    case CURRENT_WEATHER_FETCH_ACTION.fail:
      let currentWeatherErrState = Object.assign({}, state);
      currentWeatherErrState.loading = false;
      currentWeatherErrState.current = null;
      currentWeatherErrState.error = {
        isError: true,
        error: action.data
      };
      return currentWeatherErrState;
    case WEATHER_FORECAST_FETCH_ACTION.fail:
      let forecastErrState = Object.assign({}, state);
      forecastErrState.loading = false;
      forecastErrState.forecast = null;
      forecastErrState.error = {
        isError: true,
        error: action.data
      };
      return forecastErrState;

    default:
      break;
  }
  return state;
};

const getCurrentWeatherDataFromResponse = (weatherData: any) => {
  const currentWeather: Weather = {
    description: weatherData.weather.description,
    currentTemperature: weatherData.temp,
    minTemperature: weatherData.min_temp,
    maxTemperature: weatherData.max_temp,
    humidity: weatherData.rh,
    precipitation: weatherData.pop,
    wind: weatherData.wind_spd,
    icon: parseInt(weatherData.weather.code),
    windDirection: weatherData.wind_cdir_full
  };
  return currentWeather;
};

export default WeatherReducer;
