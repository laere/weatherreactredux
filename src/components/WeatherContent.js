import React from 'react';
import { connect } from 'react-redux';
import helpers from 'helpers';

class WeatherContent extends React.Component {
  renderTemperatures() {
    const { weather } = this.props;
    return (
      <div>
        <h4>Temperatures:</h4>
        <ul>
          <li>Current: {helpers.kelvinToFarenheit(weather.main.temp)}</li>
          <li>High: {helpers.kelvinToFarenheit(weather.main.temp_max)}</li>
          <li>Low: {helpers.kelvinToFarenheit(weather.main.temp_min)}</li>
        </ul>
      </div>
    );
  }

  renderDates() {
    const { weather } = this.props;
    return (
      <ul>
        <li>Sunrise: {helpers.dateConversion(weather.sys.sunrise)}</li>
        <li>Sunset: {helpers.dateConversion(weather.sys.sunset)}</li>
      </ul>
    );
  }

  renderContent() {
    const { weather } = this.props;

    if (!weather) {
      return <div>Waiting for user input...</div>;
    }

    return (
      <div>
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p>{helpers.dateConversion(weather.dt)}</p>
        {this.renderTemperatures()}
        <div>
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather" />
          <div>{weather.weather[0].description}</div>
        </div>
        <div>Wind: {weather.wind.speed} mph</div>
        {this.renderDates()}
      </div>
    );
  }


  render() {
    console.log(this.props.weather);
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherContent);
