import React from 'react';
import DayForecast from './dayforecast';
import NightForecast from './nightforecast';

const DetailedForecast = (props) => {
   return (
     <div className="details">
       <DayForecast />
       <NightForecast />
     </div>
   )
}

export default DetailedForecast;
