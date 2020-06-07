export const GEOCODER_API_KEY = "<api_key>";

export const CURRENT_WEATHER_API_URL =
  "https://3h7zbe2di9.execute-api.us-east-2.amazonaws.com/dev/current-weather";
export const WEATHER_FORECAST_API_URL =
  "https://3h7zbe2di9.execute-api.us-east-2.amazonaws.com/dev/forecast";

export const USER_LOCATION_FETCH_ACTION = {
  init: "USER_LOCATION_FETCH_INIT",
  success: "USER_LOCATION_FETCH_SUCCESS",
  fail: "USER_LOCATION_FETCH_FAIL"
};

export const CURRENT_WEATHER_FETCH_ACTION = {
  init: "CURRENT_WEATHER_FETCH_INIT",
  success: "CURRENT_WEATHER_FETCH_SUCCESS",
  fail: "CURRENT_WEATHER_FETCH_FAIL"
};

export const WEATHER_FORECAST_FETCH_ACTION = {
  init: "WEATHER_FORECAST_FETCH_INIT",
  success: "WEATHER_FORECAST_FETCH_SUCCESS",
  fail: "WEATHER_FORECAST_FETCH_FAIL"
};

export const SEARCH_LOCATION_UPDATED = "SEARCH_LOCATION_UPDATED";

export const LOCATION_ACCESS_BLOCKED = "LOCATION_ACCESS_BLOCKED";
export const WEATHER_FORECAST_API_FAIL = "WEATHER_FORECAST_API_FAIL";
export const WEATHER_CURRENT_API_FAIL = "WEATHER_CURRENT_API_FAIL"
