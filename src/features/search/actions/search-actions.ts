import { SEARCH_LOCATION_UPDATED } from "../../../common/constants";

export const setSearchLocation = (city:string, country:string) => {
    return (dispatch: any) => {
        dispatch({ type: SEARCH_LOCATION_UPDATED, data: {city,country} });
    }
}