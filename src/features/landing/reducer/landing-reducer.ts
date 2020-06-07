import {
  USER_LOCATION_FETCH_ACTION,
  SEARCH_LOCATION_UPDATED
} from "../../../common/constants";

const initialState = {
  location: {
    city: null,
    country: null
  },
  error: {
    isError: false,
    errorMsg: null
  }
};
const LandingReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USER_LOCATION_FETCH_ACTION.init:
      let initState = Object.assign({}, state);
      initState.loading = true;
      initState.location = null;
      return initState;
    case USER_LOCATION_FETCH_ACTION.success:
      let returnState = Object.assign({}, state);
      returnState.loading = false;
      returnState.location = action.data.address;
      return returnState;
    case USER_LOCATION_FETCH_ACTION.fail:
      let failedState = Object.assign({}, state);
      failedState.loading = false;
      failedState.location = null;
      failedState.error.isError = true;
      failedState.error.errorMsg = action.data.error;
      return failedState;
    case SEARCH_LOCATION_UPDATED:
      let newState = Object.assign({}, state);
      newState.loading = false;
      newState.location = action.data;
      return newState;
    default:
      break;
  }
  return state;
};

export default LandingReducer;
