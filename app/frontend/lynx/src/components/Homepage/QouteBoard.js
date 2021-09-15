import { useState, useEffect } from 'react';

import './../../assets/css/Homepage/QouteBoard.css'
import './../../assets/css/Bootstrap.css';

const QuoteBoard = () => {
    const [Quotes, setQuotes] = useState('not working');
useEffect(() => {
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "ES,ZN,GE,BTC,CL,NG"
      };
      fetch('http://127.0.0.1:5000/Quotes', requestOptions)
        .then(res => res.json()).then(data => {
          setQuotes(data);
        })
    },[]);

    var qKeys = Object.keys(Quotes)

    return (
      <div className="quotes">

        <div id="row-1">
          <div className="q1">
            <div className="q1-main" style={{borderBottom: 'none'}}
                 onClick={()=> window.open(Quotes[qKeys[0]][3], "_blank")}>
              <h3>{qKeys[0]}</h3>
              <p>{Quotes[qKeys[0]][0]}</p>
              <div className="q1-bottom">
                <div id="q1-last">{Quotes[qKeys[0]][1]}</div>
                <div id="q1-pchange">{Quotes[qKeys[0]][2]}</div>
              </div>
            </div>
          </div>

          <div className="q1">
            <div className="q1-main" style={{borderBottom: 'none'}}
                 onClick={()=> window.open(Quotes[qKeys[1]][3], "_blank")}>
              <h3>{qKeys[1]}</h3>
              <p>{Quotes[qKeys[1]][0]}</p>
              <div className="q1-bottom">
                <div id="q1-last">{Quotes[qKeys[1]][1]}</div>
                <div id="q1-pchange">{Quotes[qKeys[1]][2]}</div>
              </div>
            </div>
          </div>

          <div className="q1">
            <div className="q1-main" style={{borderRight: '1px solid #87B4E5', borderBottom: 'none'}}
                 onClick={()=> window.open(Quotes[qKeys[2]][3], "_blank")}>
              <h3>{qKeys[2]}</h3>
              <p>{Quotes[qKeys[2]][0]}</p>
              <div className="q1-bottom">
                <div id="q1-last">{Quotes[qKeys[2]][1]}</div>
                <div id="q1-pchange">{Quotes[qKeys[2]][2]}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="row-2">
          <div className="q2">
            <div className="q2-main" onClick={()=> window.open(Quotes[qKeys[3]][3], "_blank")}>
              <h3>{qKeys[3]}</h3>
              <p>{Quotes[qKeys[3]][0]}</p>
              <div className="q2-bottom">
                <div id="q2-last">{Quotes[qKeys[3]][1]}</div>
                <div id="q2-pchange">{Quotes[qKeys[3]][2]}</div>
              </div>
            </div>
          </div>

          <div className="q2">
            <div className="q2-main" onClick={()=> window.open(Quotes[qKeys[4]][3], "_blank")}>
              <h3>{qKeys[4]}</h3>
              <p>{Quotes[qKeys[4]][0]}</p>
              <div className="q2-bottom">
                <div id="q2-last">{Quotes[qKeys[4]][1]}</div>
                <div id="q2-pchange">{Quotes[qKeys[4]][2]}</div>
              </div>
            </div>
          </div>

          <div className="q2">
            <div className="q2-main" style={{borderRight: '1px solid #87B4E5'}}
                 onClick={()=> window.open(Quotes[qKeys[5]][3], "_blank")}>
              <h3>{qKeys[5]}</h3>
              <p>{Quotes[qKeys[5]][0]}</p>
              <div className="q2-bottom">
                <div id="q2-last">{Quotes[qKeys[5]][1]}</div>
                <div id="q2-pchange">{Quotes[qKeys[5]][2]}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}

export default QuoteBoard;
