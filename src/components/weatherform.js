import React from 'react';
import '../css/weather-form.css';

class WeatherForm extends React.Component {
  getWeather(event) {
    event.preventDefault();
    const weatherId = (this.refs.weatherFormInput.value).replace(/\s/g,'').toLowerCase();
    let path = `/weather/${weatherId}`;
    this.props.history.push(path);
  }
  render() {
    return (
      <form action="" className="weather-form" onSubmit={this.getWeather.bind(this)}>
        <h1 className="form-title">Find your local weather!</h1>
          <div>
            <label htmlFor="city">Enter city, state:</label>
              <input type="text" id="city" name="city" placeholder="ex: Los Angeles, CA" ref="weatherFormInput"/>
          </div>
          <footer>
        <input type="submit" value="Find my weather!" />
      </footer>
    </form>
  );
  }
}

export default WeatherForm;
