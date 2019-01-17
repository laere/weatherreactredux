import React from 'react';
import SearchBar from 'components/SearchBar';
import WeatherContent from 'components/WeatherContent';
import { connect } from 'react-redux';
import * as actions from 'actions';

class App extends React.Component {
  onSubmit = (location) => {
    this.props.fetchWeather(location);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        <WeatherContent />
      </div>
    );
  }
}

export default connect(null, actions)(App);
