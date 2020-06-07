import React from "react";
import { getLocaleCurrentWeather } from "../actions/weather-actions";
import ApplicationState from "../../../store/application-state";
import { connect } from "react-redux";
import { Weather } from "../weather";
import moment from "moment";
import { getWeatherIcon } from "../weather-utils";

interface WeatherCurrentProps {
  city: string;
  country: string;
  getLocaleCurrentWeather: Function;
  currentWeather: Weather;
}

class WeatherCurrent extends React.Component<WeatherCurrentProps> {
  componentDidMount() {
    if (this.props.city && this.props.country) {
      this.props.getLocaleCurrentWeather(this.props.city, this.props.country);
    }
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.city !== this.props.city) {
      this.props.getLocaleCurrentWeather(this.props.city, this.props.country);
    }
  }
  render() {
    const iconClass = this.props.currentWeather
      ? getWeatherIcon(this.props.currentWeather.icon)
      : "default";

    return (
      <div className=" row weather today">
        <div className="col-lg-6">
          <div className="header">
            <div className="location">
              {`${this.props.city}, ${this.props.country}`}
            </div>
            <div className="date">{moment().format("MMMM Do, YYYY")}</div>
          </div>
          {this.props.currentWeather ? (
            <div className="content">
              <div className={"icon icon-" + iconClass}></div>
              <div className="description">
                {this.props.currentWeather.description}
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-lg-6 align-text-top">
          {this.props.currentWeather ? (
            <div className="temperature">
              <span>{this.props.currentWeather.currentTemperature}</span>
              <sup>o</sup>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    currentWeather: state.weather.current
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLocaleCurrentWeather: (city: string, country: string) =>
      dispatch(getLocaleCurrentWeather(city, country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCurrent);
