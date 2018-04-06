import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/global.css';
import WeatherForm from './components/weatherform';
import WeatherApp from './components/weatherapp';

const Root = () => {
 return (
   <BrowserRouter>
     <div>
       <Route exact path="/" component={ WeatherForm } />
       <Route path="/weather/:weatherId" component={ WeatherApp } />
     </div>
   </BrowserRouter>
 )
}
render( <Root />, document.querySelector('#app') );
