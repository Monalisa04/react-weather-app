import React from "react";
import { connect } from "react-redux";
import ApplicationState from "../../../store/application-state";
import { getUserLocale } from "../actions/landing-actions";
import WeatherCurrent from "../../weather/components/weather-current";
import WeatherForecastTable from "../../weather/components/weather-forecast-table";
import Search from "../../search/components/search";
import ErrorMsg from "../../error-msg/components/error-msg";

class Landing extends React.Component<any, any> {
  componentDidMount() {
    this.props.getUserLocale();
  }
  render() {
    return (
      <React.Fragment>
        <div className="container app-container">
          {this.props.landing.location &&
          this.props.landing.location.city &&
          this.props.landing.location.country ? (
            <React.Fragment>
              <WeatherCurrent
                city={this.props.landing.location.city}
                country={this.props.landing.location.country}
              ></WeatherCurrent>
              {
                <WeatherForecastTable
                  city={this.props.landing.location.city}
                  country={this.props.landing.location.country}
                ></WeatherForecastTable>
              }
            </React.Fragment>
          ) : this.props.landing.error && this.props.landing.error.isError ? (
            <ErrorMsg errorCode={this.props.landing.error.errorMsg}></ErrorMsg>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    landing: state.landing
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserLocale: () => dispatch(getUserLocale())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
