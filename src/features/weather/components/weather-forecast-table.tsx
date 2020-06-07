import React from "react";
import ApplicationState from "../../../store/application-state";
import { getForecast } from "../actions/weather-actions";
import { connect } from "react-redux";
import { Weather } from "../weather";
import moment from "moment";
import { getWeatherIcon } from "../weather-utils";

interface WeatherForecastTableProps {
  city: string;
  country: string;
  getForecast: Function;
  forecast: Map<Date, Weather>;
}

class WeatherForecastTable extends React.Component<WeatherForecastTableProps> {
  componentDidMount() {
    const { city, country } = this.props;
    if (city && country) {
      this.props.getForecast(city, country);
    }
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.city !== this.props.city) {
      const { city, country } = this.props;
      this.props.getForecast(city, country);
    }
  }

  render() {
    let forecastHtml: any = [];
    if (this.props.forecast) {
      this.props.forecast.forEach((item: Weather, date: Date) => {
        const iconClass = getWeatherIcon(item.icon);
        forecastHtml.push(
          <div className="col-lg-2 item" key={date.toString()}>
            <div className="row">
              <div className="col-12 text-center date">
                {moment(date).format("ddd, Do MMM")}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={"mx-auto icon icon-" + iconClass}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center max-temp">
                {item.maxTemperature}<sup>o</sup>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center min=temp">
                {item.minTemperature}<sup>o</sup>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center precip">
                {item.precipitation}%
              </div>
            </div>
          </div>
        );
      });
      return <div className="row weather forecast">{forecastHtml}</div>;
    } else {
      return null;
    }

    
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    forecast: state.weather.forecast
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getForecast: (city: string, country: string) =>
      dispatch(getForecast(city, country))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecastTable);
