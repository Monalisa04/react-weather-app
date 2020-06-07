import {
  getCurrentWeather,
  getWeatherForecast
} from "../../../common/services/weather-service";
import {
  CURRENT_WEATHER_FETCH_ACTION,
  WEATHER_FORECAST_FETCH_ACTION
} from "../../../common/constants";

export const getLocaleCurrentWeather = (city: string, country: string) => {
  return (dispatch: any) => {
    dispatch({ type: CURRENT_WEATHER_FETCH_ACTION.init, data: null });

    getCurrentWeather(city, country).then(
      (response: any) => {
        if (!response.isError) {
          dispatch({
            type: CURRENT_WEATHER_FETCH_ACTION.success,
            data: response.current
          });
        } else {
          dispatch({
            type: CURRENT_WEATHER_FETCH_ACTION.fail,
            data: response.error
          });
        }
      },
      (error: any) => {
        dispatch({ type: CURRENT_WEATHER_FETCH_ACTION.fail, data: error });
      }
    );
  };
};

export const getForecast = (city: string, country: string) => {
  return (dispatch: any) => {
    dispatch({ type: WEATHER_FORECAST_FETCH_ACTION.init, data: null });

    getWeatherForecast(city, country).then(
      (response: any) => {
        if (!response.isError) {
          dispatch({
            type: WEATHER_FORECAST_FETCH_ACTION.success,
            data: response.forecast
          });
        } else {
          dispatch({
            type: WEATHER_FORECAST_FETCH_ACTION.fail,
            data: response.error
          });
        }
      },
      (error: any) => {
        dispatch({ type: WEATHER_FORECAST_FETCH_ACTION.fail, data: error });
      }
    );
  };
};
