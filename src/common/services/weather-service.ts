import {
  CURRENT_WEATHER_API_URL,
  WEATHER_FORECAST_API_URL
} from "../constants";
import { isNil } from "lodash";
import Axios from "axios";

export const getCurrentWeather = (city: string, country: string) => {
  let response: {
    current: any | null;
    error?: string;
    isError: boolean;
  };
  response = { current: null, error: "", isError: false };
  return new Promise((resolve, reject) => {
    if (isNil(city) || isNil(country)) {
      response.isError = true;
      response.error = "Invalid function parameters";
      reject(response);
    } else {
      let apiParams = "?city=" + city;
      apiParams += "&country=" + country;
      apiParams += "&units=metric";
      return Axios.get(CURRENT_WEATHER_API_URL + apiParams).then(
        (data: any) => {
          if (data && data.data && data.data.body) {
            const parsedData = JSON.parse(data.data.body);
            if (parsedData && Array.isArray(parsedData.data)) {
              response.current = parsedData.data[0];
              resolve(response);
            } else {
              response.isError = true;
              response.error = "Failed to fetch current weather data";
              reject(response);
            }
          } else {
            response.isError = true;
            response.error = "Failed to fetch current weather data";
            reject(response);
          }
        },
        (error: any) => {
          response.isError = true;
          response.error = error;
          reject(response);
        }
      );
    }
  });
};

export const getWeatherForecast = (
  city: string,
  country: string,
  numberOfDays?: number
) => {
  let response: {
    forecast: Array<any> | null;
    error?: string;
    isError: boolean;
  };
  response = { forecast: null, error: "", isError: false };

  return new Promise((resolve, reject) => {
    if (isNil(city) || isNil(country)) {
      response.isError = true;
      response.error = "Invalid function parameters";
      reject(response);
    } else {
      let apiParams = "?city=" + city;
      apiParams += "&country=" + country;
      apiParams += "&units=metric";
      fetch(WEATHER_FORECAST_API_URL + apiParams).then(
        function (data) {
          if (data.status === 200) {
            try {
              data.json().then(function (data) {
                let error = false;
                if (data && data.body) {
                  const parsedData = JSON.parse(data.body);
                  if (Array.isArray(parsedData.data)) {
                    response.forecast = parsedData.data;
                    resolve(response);
                  } else {
                    response.isError = true;
                    response.error = "Failed to weather forecast";
                    reject(response);
                  }
                } else {
                  response.isError = true;
                  response.error = "Failed to weather forecast";
                  reject(response);
                }

                if (error) {
                  response.isError = true;
                  response.error = "Failed to weather forecast";
                  reject(response);
                }
              });
            } catch (e) {
              response.isError = true;
              response.error = "Failed to weather forecast";
              reject(response);
            }
          } else {
            response.isError = true;
            response.error = "Failed to weather forecast";
            reject(response);
          }
        },
        function (error) {
          response.isError = true;
          response.error = "Invalid function parameters";
          reject(response);
        }
      );
    }
  });
};
