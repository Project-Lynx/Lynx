import React, { useState, useEffect } from 'react';

import './../../assets/css/Homepage/Events.css'
import './../../assets/css/Homepage/Homepage.css'

const Events = () => {
    const [Events, setEvents] = useState('not working');
    useEffect(() => {
      fetch('http://18.119.100.184:8080/events/get-econ-events/US')
        .then(res => res.json()).then(data => {
          setEvents(data);
        })
    }, []);

    function eventsTable() {
        var keys = Object.keys(Events);
        return keys.map((key, index) => {
          return (
            <tr>
              <td>
                {Events[key][0]}
              </td>
              <td>
                {Events[key][1]}
              </td>
              <td>
                {Events[key][2]}
              </td>
              <td>
                {Events[key][3]}
              </td>
              <td style={{borderRight: 'none'}}>
                {Events[key][4]}
              </td>
            </tr>
          )
        })
    }

    return (
        <div className="events-table">

            <table className="events-data" id="event-rows">
              <thead>
                <td> Event </td>
                <td>Region</td>
                <td>Time</td>
                <td>Expected</td>
                <td style={{borderRight: 'none', paddingRight: 10 + 'px'}}>Actual</td>
              </thead>
              <tbody>
                {eventsTable()}
              </tbody>
            </table>

        </div>
    )
}

export default Events;
