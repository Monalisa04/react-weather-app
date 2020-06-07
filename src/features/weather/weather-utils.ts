export const getWeatherIcon = (iconCode?: number) => {
  switch (iconCode) {
    case 200:
    case 201:
    case 202:
    case 230:
    case 231:
    case 232:
    case 233:
      return "thunderstorm";
    case 300:
    case 301:
    case 302:
    case 500:
    case 501:
    case 502:
    case 511:
    case 520:
    case 521:
    case 522:
      return "rain";
    case 600:
    case 601:
    case 602:
    case 601:
      return "snow";
    case 800:
      return "sunny";
    case 801:
    case 802:
    case 803:
    case 804:
      return "cloudy";
    default:
      return "default";
  }
};
