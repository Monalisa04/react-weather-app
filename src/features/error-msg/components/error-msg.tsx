import React from "react";
import { LOCATION_ACCESS_BLOCKED } from "../../../common/constants";

const ErrorMsg = (props: { errorCode: string }) => {
  let errorMsg = "";
  switch (props.errorCode) {
    case LOCATION_ACCESS_BLOCKED:
      errorMsg = "Please allow location access or Search by City for weather";
      break;
    default:
      break;
  }
  return <div className="error-msg text-center">{errorMsg}</div>;
};

export default ErrorMsg;
