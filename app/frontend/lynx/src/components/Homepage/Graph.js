import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

import './../../assets/css/Homepage/Graph.css'

const Graph = () => {
    const [Hist, setHist] = useState('not working');
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "ES"
      };
    useEffect(() => {
      fetch('http://127.0.0.1:5000/Hist', payload).then(res => res.json()).then(data => {
        setHist(data);
      });
    }, []);

    const key = Object.keys(Hist)
    const _data = (Hist[key])

    function addIndic(){

    }

    function addModel(){

    }

    function addSymbol(){

    }

    function timeFrame(){

    }

    function plotType(){

    }

    try {
      if (typeof _data != "undefined") {
        const x_axis = Object.keys(_data)
        const y_axis = Object.values(_data)

        return (
          <div className="graph">
            <div className="graph-options-box">
              <div className="symbol-search">
                <form action="/test" method="get">
                  <input
                      type="text"
                      id="input"
                      placeholder="Enter Symbol..."
                      name="symbol"
                  />
                </form>
              </div>
              <div className="buttons">
                <div className="chart-btn">
                  <div onClick={() => addIndic()}>Add Indicator</div>
                </div>
                <div className="chart-btn">
                  <div onClick={() => addModel()}>Add Model</div>
                </div>
                <div className="chart-btn">
                  <div onClick={() => addSymbol()}>Add Symbol</div>
                </div>
                <div className="chart-btn">
                  <div onClick={() => timeFrame()}>Timeframe</div>
                </div>
                <div className="chart-btn">
                  <div onClick={() => plotType()}>Plot Type</div>
                </div>
              </div>
            </div>
            <div className="canvas">
              <Plot
                data={[
                  {
                    x: x_axis,
                    y: y_axis,
                    type: 'scatter',
                    fill: 'tonexty',
                    mode: 'lines+markers',
                    marker: {color: 'rgba(135, 180, 229, 0.5)'},
                  },
                ]}
                layout={ {
                          title: key[0], plot_bgcolor: '#242e3f',
                          paper_bgcolor: '#1D262F', xaxis: {gridcolor: 'rgba(255, 255, 255, 0.15)'},
                          yaxis: {gridcolor: 'rgba(255, 255, 255, 0.1)', range: [Math.min(...y_axis), Math.max(...y_axis) + 1]},
                          font: {color: 'white'},
                       } }
                style= { {
                          width: "100%", height: "100%"
                       } }
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
