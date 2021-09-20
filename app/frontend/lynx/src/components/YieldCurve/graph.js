import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

import './../../assets/css/YieldCurve/graph.css'
import './../../assets/css/Meta/Bootstrap.css'

/*
TODO:
  1. Figure out how to dynamically add traces
     when input is recieved from addDate func.
*/

const Graph = () => {
    const [Data, setData] = useState('not working');
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "UST,MOST_RECENT"
      };
    useEffect(() => {
      fetch('http://127.0.0.1:5000/get-curve', payload).then(res => res.json()).then(data => {
        setData(data);
      });
    }, []);

    const key = Object.keys(Data)
    const _data = (Data[key])

    try {
      if (typeof _data != "undefined") {
         const x_axis = Object.keys(_data)
         const y_axis = Object.values(_data)

         var chartData = [
                       {
                         x: x_axis,
                         y: y_axis,
                         type: 'scatter',
                         fill: 'tonexty',
                         mode: 'lines+markers',
                         marker: {color: 'rgba(135, 180, 229, 0.5)'},
                       },
         ]
         var chartLayout={
                   title: "Yield Curve", plot_bgcolor: '#242e3f',
                   paper_bgcolor: '#1D262F', xaxis: {gridcolor: 'rgba(255, 255, 255, 0.15)'},
                   yaxis: {gridcolor: 'rgba(255, 255, 255, 0.1)', range: [Math.min(...y_axis), Math.max(...y_axis) + 0.5]},
                   font: {color: 'white'},
         }
         var chartStyle={
                   width: "100%", height: "100%"
         }

         function AddDate(date) {
           fetch(
             'http://127.0.0.1:5000/get-curve',
             {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: "UST,1996-10-21"
             }
           ).then(res => res.json()).then(data => {
             setData(data)
           })
         }

         return (
           <div className="graph-box">
             <div className="graph-options-box">
               <input
                   type="text"
                   id="symbolInput"
                   placeholder="Change Symbol..."
                   name="symbol"
                   onKeyPress={(ev) => {
                     if (ev.key === 'Enter') {
                      ev.preventDefault()
                      let value = `${document.getElementById("symbolInput").value}`
                      fetch(
                        'http://127.0.0.1:5000/get-curve',
                        {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: value + ",MOST_RECENT"
                        }
                      ).then(res => res.json()).then(data => {
                        setData(data)
                      })

                     }
                   }}

               />
               <input
                 type="text"
                 id="addDateInput"
                 placeholder="Add Date..."
                 name="addDate"
                 onKeyPress={(ev) => {
                   if (ev.key === 'Enter') {
                     ev.preventDefault()
                     let value = `${document.getElementById("addDateInput").value}`
                     let product = `${document.getElementById("symbolInput").value}`
                     if (product === "") {
                        fetch(
                          'http://127.0.0.1:5000/get-curve',
                          {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: "UST," + value
                          }
                        ).then(res => res.json()).then(data => {
                            let key = Object.keys(data)
                            let _data = (data[key])
                            let x_axis = Object.keys(_data)
                            let y_axis = Object.values(_data)
                            chartData.push({
                              x: x_axis,
                              y: y_axis,
                              type: 'scatter',
                              fill: 'tonexty',
                              mode: 'lines+markers',
                              marker: {color: 'rgba(210, 180, 229, 0.5)'},
                            })
                            console.log(chartData)
                            var chart = document.getElementById("test123")
                            chart.setAttribute("data", chartData)
                        })
                     } else {
                     }
                   }
                 }}
               />
               <input
                 type="text"
                 id="changeDateInput"
                 placeholder="Change Date..."
                 name="changeDate"
                 onKeyPress={(ev) => {
                   if (ev.key === 'Enter') {
                      ev.preventDefault()
                      let value = `${document.getElementById("changeDateInput").value}`
                      let product = `${document.getElementById("symbolInput").value}`
                      if (product === "") {
                         fetch(
                           'http://127.0.0.1:5000/get-curve',
                           {
                             method: 'POST',
                             headers: { 'Content-Type': 'application/json' },
                             body: "UST," + value
                           }
                         ).then(res => res.json()).then(data => {
                           setData(data)
                         })
                      } else {
                         console.log(product + value)
                         fetch(
                           'http://127.0.0.1:5000/get-curve',
                           {
                             method: 'POST',
                             headers: { 'Content-Type': 'application/json' },
                             body: product + "," + value
                           }
                         ).then(res => res.json()).then(data => {
                           setData(data)
                         })
                      }
                 }}
                }
               />
             </div>
             <div className="canvas">
               <Plot
                 divId="test123"
                 data={chartData}
                 layout={chartLayout}               
                 style={chartStyle}
               />
             </div>
           </div>
      );
    }
    } catch (e) {
        console.log(e)
    }
}

export default Graph;
