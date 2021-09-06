import React, { useState, useEffect } from 'react';

import './../../assets/css/Homepage/Events.css'

const Events = () => {
    const [Events, setEvents] = useState('not working');
    useEffect(() => {
      const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "US,"
      };
      fetch('http://127.0.0.1:5000/EconEvents', payload).then(res => res.json()).then(data => {
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
