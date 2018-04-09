import classNames from 'classnames';
import React from 'react';
 class Day extends React.Component {

   constructor() {
     super();
   }
    formatDate(datetime) {
      let thisdate = new Date(datetime);
      return thisdate.toLocaleDateString('en-US',
      {
        month: 'short',
        day: 'numeric'
      });
    }
    getDayofWeek(datetime) {
      let thisdate = new Date(datetime);
      return thisdate.toLocaleDateString('en-US',
      {
        weekday: 'short'
      });
    }
   render() {
    const day = this.props.day
    // const classes = classNames({
    //     day: true,
    //     selected: day === this.props.data.currentDay
    //     });

     return (
      <div className="day">
        <div onClick={ () => this.props.updateCurrentDay(day)}></div>
        <h2>{this.getDayofWeek(day.dt)}</h2>
        <h3>{this.formatDate(day.dt)}</h3>
        <img src={process.env.PUBLIC_URL + "/weather_icons/" + day.icon + ".png"} alt="weather" />
        <div className="degrees">
          <span className="high">{day.temp_max}&deg;</span>/{day.temp_min}&deg;
        </div>
        <p>{day.description}</p>
     </div>
     )
   }
 }

export default Day;




// import React from 'react';
//
// class Day extends React.Component {
//   render() {
//     return (
//        <div className="day">
//          <h2>TODAY</h2>
//          <h3>Nov 24</h3>
//          <img src={process.env.PUBLIC_URL + "/weather_icons/01d.png"} alt="weather" />
//           <div className="degrees">
//            <span className="high">81&deg;</span>/64&deg;
//           </div>
//          <p>A p.m. shower or thunderstorm.</p>
//        </div>
//     )
//   }
// }
//
// export default Day;
