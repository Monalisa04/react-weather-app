import {
  getUserLocationCoordinates,
  getUserAddressFromCoordinates
} from "../../../common/services/location-service";
import { USER_LOCATION_FETCH_ACTION } from "../../../common/constants";

export const getUserLocale = () => {
  return (dispatch: any) => {
    dispatch({ type: USER_LOCATION_FETCH_ACTION.init, data: null });

    getUserLocationCoordinates().then(
      (response: any) => {
        getUserAddressFromCoordinates(
          response.location.latitude,
          response.location.longitude
        ).then((response: any) => {
          dispatch({
            type: USER_LOCATION_FETCH_ACTION.success,
            data: response
          });
        });
      },
      (error: any) => {
        dispatch({ type: USER_LOCATION_FETCH_ACTION.fail, data: error });
      }
    );
  };
};
