import React from 'react';
  import Day from './day';

class Days extends React.Component {
    render() {
      const cityData = this.props.data.city;
      return (
      <div>
       <h1>Weather for {this.props.cityState}</h1>
        <div className="days">
        {
          cityData.map( (day, i) => {
            return <Day day={ day }
              updateCurrentDay={ this.props.updateCurrentDay }
              key={ i } />
          })
        }
        </div>
       </div>
        )
      }
      formatDate(datetime) {
         let thisdate = new Date(datetime);
         return thisdate.toLocaleDateString('en-US',
           {
             month: 'short',
             day: 'numeric'
           });
       }
       getDayOfWeek(datetime) {
         let thisdate = new Date(datetime);
         return thisdate.toLocaleDateString('en-US',
           {
             weekday: 'short'
           });
       }
    }

export default Days;
