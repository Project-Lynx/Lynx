import React, { useState, useEffect } from 'react';

import './../../assets/css/Homepage/events.css'

const EconEvents = () => {
    const [Events, setEvents] = useState('not working');
    useEffect(() => {
      const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "US"
      };
      fetch('http://127.0.0.1:5000/EconEvents', payload).then(res => res.json()).then(data => {
        setEvents(data);
        console.log(data)
      })
    }, []);

    function eventsTable() {
        var keys = Object.keys(Events);
        return keys.map((key, index) => {
          return (
            <tr>
              <td style={{width: 200 + 'px'}}>
                {key}
              </td>
              <td style={{width: 78 + 'px'}}>
                {Events[key][0]}
              </td>
              <td style={{width: 200 + 'px'}}>
                {Events[key][1]}
              </td>
              <td style={{width: 94 + 'px'}}>
                {Events[key][2]}
              </td>
              <td style={{borderRight: 'none'}}>
                {Events[key][3]}
              </td>
            </tr>
          )
        })
    }

    return (
        <div className="events-table">

            <table className="events-columns">
                 <tr>
                     <td style={{width: 200 + 'px'}}>Event</td>
                     <td style={{width: 50 + 'px'}}>Region</td>
                     <td style={{width: 200 + 'px'}}>Time</td>
                     <td style={{width: 50 + 'px'}}>Expected</td>
                     <td style={{border: 'none'}}>Actual</td>
                 </tr>
            </table>

            <table className="events-data" id="event-rows">
              {eventsTable()}
            </table>

        </div>
    )
}

export default EconEvents;
