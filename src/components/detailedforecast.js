import React from 'react';
import DayForecast from './dayforecast';
import NightForecast from './nightforecast';

const DetailedForecast = (props) => {
   return (
     <div className="details">
       <DayForecast currentDay={ props.currentDay } />
       <NightForecast currentDay={ props.currentDay } />
     </div>
   )
}

export default DetailedForecast;
