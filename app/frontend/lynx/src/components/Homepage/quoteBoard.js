import { useState, useEffect } from 'react';

import './../../assets/css/Homepage/quoteboard.css'
import './../../assets/css/Bootstrap.css';

const QuoteBoard = () => {
    const [Quotes, setQuotes] = useState('not working');
    useEffect(() => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "ES=F,ZN=F,GE=F,DX=F,CL=F,NG=F"
      };
      fetch('http://127.0.0.1:5000/Quotes', requestOptions)
        .then(res => res.json()).then(data => {
          setQuotes(data);
        })
    },[]);

    var qKeys = Object.keys(Quotes)
    var q1Symbol = qKeys[0]
    var q1Url = Quotes[qKeys[0]]["url"]
    var q1Name = Quotes[qKeys[0]]["name"]
    var q1Last = Quotes[qKeys[0]]["last"]
    var q1PChange = Quotes[qKeys[0]]["pchange"]
    var q2Symbol = qKeys[1]
    var q2Url = Quotes[qKeys[1]]["url"]
    var q2Name = Quotes[qKeys[1]]["name"]
    var q2Last = Quotes[qKeys[1]]["last"]
    var q2PChange = Quotes[qKeys[1]]["pchange"]
    var q3Symbol = qKeys[2]
    var q3Url = Quotes[qKeys[2]]["url"]
    var q3Name = Quotes[qKeys[2]]["name"]
    var q3Last = Quotes[qKeys[2]]["last"]
    var q3PChange = Quotes[qKeys[2]]["pchange"]
    var q4Symbol = qKeys[3]
    var q4Url = Quotes[qKeys[3]]["url"]
    var q4Name = Quotes[qKeys[3]]["name"]
    var q4Last = Quotes[qKeys[3]]["last"]
    var q4PChange = Quotes[qKeys[3]]["pchange"]
    var q5Symbol = qKeys[4]
    var q5Url = Quotes[qKeys[4]]["url"]
    var q5Name = Quotes[qKeys[4]]["name"]
    var q5Last = Quotes[qKeys[4]]["last"]
    var q5PChange = Quotes[qKeys[4]]["pchange"]
    var q6Symbol = qKeys[5]
    var q6Url = Quotes[qKeys[5]]["url"]
    var q6Name = Quotes[qKeys[5]]["name"]
    var q6Last = Quotes[qKeys[5]]["last"]
    var q6PChange = Quotes[qKeys[5]]["pchange"]

    return (
      <div className="quotes">
        <div className="q1">
          <div className="q1-main">
            <div className="q1-symbol" onClick={()=> window.open(q1Url, "_blank")}>
              <h3>{q1Symbol}</h3>
            </div>
            <div className="q1-name">
              <p>{q1Name}</p>
            </div>
          </div>
          <div className="q1-bottom">
            <div className="q1-last">
              <span>{q1Last}</span>
            </div>
            <div className="q1-p-change">
              <span>{q1PChange}</span>
            </div>
          </div>
        </div>
        <div className="q2">
          <div className="q2-main">
            <div className="q2-symbol" onClick={()=> window.open(q2Url, "_blank")}>
              <h3>{q2Symbol}</h3>
            </div>
            <div className="q2-name">
              <p>{q2Name}</p>
            </div>
          </div>
          <div className="q2-bottom">
            <div className="q2-last">
              <span>{q2Last}</span>
            </div>
            <div className="q2-p-change">
              <span>{q2PChange}</span>
            </div>
          </div>
        </div>
        <div className="q3">
          <div className="q3-main">
            <div className="q3-symbol" onClick={()=> window.open(q3Url, "_blank")}>
              <h3>{q3Symbol}</h3>
            </div>
            <div className="q3-name">
              <p>{q3Name}</p>
            </div>
          </div>
          <div className="q3-bottom">
            <div className="q3-last">
              <span>{q3Last}</span>
            </div>
            <div className="q3-p-change">
              <span>{q3PChange}</span>
            </div>
          </div>
        </div>
        <div className="q4">
         <div className="q4-main">
           <div className="q4-symbol" onClick={()=> window.open(q4Url, "_blank")}>
             <h3>{q4Symbol}</h3>
           </div>
           <div className="q4-name">
             <p>{q4Name}</p>
           </div>
         </div>
         <div className="q4-bottom">
           <div className="q4-last">
             <span>{q4Last}</span>
           </div>
           <div className="q4-p-change">
             <span>{q4PChange}</span>
           </div>
         </div>
        </div>
        <div className="q5">
          <div className="q5-main">
            <div className="q5-symbol" onClick={()=> window.open(q5Url, "_blank")}>
              <h3>{q5Symbol}</h3>
            </div>
            <div className="q5-name">
              <p>{q5Name}</p>
            </div>
          </div>
          <div className="q5-bottom">
            <div className="q5-last">
              <span>{q5Last}</span>
            </div>
            <div className="q5-p-change">
              <span>{q5PChange}</span>
            </div>
          </div>
        </div>
        <div className="q6">
          <div className="q6-main">
            <div className="q6-symbol" onClick={()=> window.open(q6Url, "_blank")}>
              <h3>{q6Symbol}</h3>
            </div>
            <div className="q6-name">
              <p>{q6Name}</p>
            </div>
          </div>
          <div className="q6-bottom">
            <div className="q6-last">
              <span>{q6Last}</span>
            </div>
            <div className="q6-p-change">
              <span>{q6PChange}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default QuoteBoard;