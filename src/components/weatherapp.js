import React from 'react';
import Days from '../components/days'
import '../css/weather-app.css';
import DetailedForecast from '../components/detailedforecast'


class WeatherApp extends React.Component {
today() {
  return new Date().toLocaleDateString('en-US',
     {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
     });
   }
 render() {
   return (
    <main>
      <Days today = {this.today()} cityState={this.props.match.params.weatherId}/>
      <DetailedForecast />
    </main>
    )
  }
}

export default WeatherApp;
