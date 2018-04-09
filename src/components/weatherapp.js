import React from 'react';
import Days from '../components/days'
import '../css/weather-app.css';
import DetailedForecast from '../components/detailedforecast'
import sampleCity from '../sample-city';

class WeatherApp extends React.Component {


  constructor() {
     super();
     this.state = {
       city: [],
       currentDay:{}
     }
     this.updateCurrentDay = this.updateCurrentDay.bind(this);
  }



  updateCurrentDay(day){
     this.setState({
       currentDay: day
     });
   }


  componentWillMount() {
   this.setState({
     city: sampleCity,
     currentDay: sampleCity[0]
   });
 }


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
      <Days
        cityState={ this.props.match.params.weatherId }data={ this.state }
        updateCurrentDay={ this.updateCurrentDay }/>
        <DetailedForecast currentDay={ this.state.currentDay } />
    </main>
    )
  }
}

export default WeatherApp;
