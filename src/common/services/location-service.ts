import geocoder from "react-geocode";
import { GEOCODER_API_KEY, LOCATION_ACCESS_BLOCKED } from "../constants";
import { isNil } from "lodash";

geocoder.setApiKey(GEOCODER_API_KEY);

interface UserLocationCoordinates {
  latitude: string;
  longitude: string;
}

interface UserAddress {
  city: string;
  country: string;
}

export const getUserLocationCoordinates = () => {
  let response: {
    location: UserLocationCoordinates | null;
    error?: string;
    isError: boolean;
  };
  response = { location: null, error: "", isError: false };
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data: any) => {
          if (data && data.coords) {
            const latitude = data.coords.latitude
              ? data.coords.latitude.toString()
              : "";
            const longitude = data.coords.longitude
              ? data.coords.longitude.toString()
              : "";
            let location = {
              latitude,
              longitude
            };
            response = { location, isError: false };
            resolve(response);
          } else {
            response.location = null;
            response.isError = true;
            response.error = "Failed to fetch location";
            reject(response);
          }
        },
        () => {
          response.location = null;
          response.isError = true;
          response.error = LOCATION_ACCESS_BLOCKED;
          reject(response);
        }
      );
    }
  });
};

export const getUserAddressFromCoordinates = (
  latitude: number,
  longitude: number
): Promise<any> => {
  let response: {
    address: UserAddress | null;
    error?: string;
    isError: boolean;
  };
  response = { address: null, error: "", isError: false };
  return new Promise((resolve, reject) => {
    if (isNil(latitude) || isNil(longitude)) {
      response.isError = true;
      response.error = "Invalid function parameters";
      reject(response);
    } else {
      return geocoder
        .fromLatLng(latitude.toString(), longitude.toString())
        .then(
          (data: any) => {
            if (data && data.status === "OK" && Array.isArray(data.results)) {
              response.address = getUserAddressFromResponse(data.results[0]);
              resolve(response);
            } else {
              response.address = null;
              response.isError = true;
              response.error = "Failed to fetch User location details";
              reject(response);
            }
          },
          (error) => {
            response.address = null;
            response.isError = true;
            response.error = error;
            reject(response);
          }
        );
    }
  });
};

const getUserAddressFromResponse = (address: any): UserAddress => {
  let city, country;
  if (address && Array.isArray(address.address_components)) {
    for (let component of address.address_components) {
      if (component.types[0] === "postal_town") {
        city = component.long_name;
      }
      if (component.types[0] === "country") {
        country = component.short_name;
      }
      if (city && country) {
        return { city, country };
      }
    }
  }
  return { city, country };
};
