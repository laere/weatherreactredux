import React from 'react';

class SearchBar extends React.Component {
  state = { location: '' }

  handleOnChange = e => {
    this.setState({ location: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.location);
    
    this.setState({ location: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Enter a city:</label>
            <input
              onChange={this.handleOnChange}
              value={this.state.location}
              type="text"
              />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
