import { useState, useEffect } from 'react';

import './../../assets/css/Homepage/quoteboard.css'
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
    var q1Symbol = qKeys[0]
    var q1Url = Quotes[qKeys[0]][3]
    var q1Name = Quotes[qKeys[0]][0]
    var q1Last = Quotes[qKeys[0]][1]
    var q1PChange = Quotes[qKeys[0]][2]
    var q2Symbol = qKeys[1]
    var q2Url = Quotes[qKeys[1]][3]
    var q2Name = Quotes[qKeys[1]][0]
    var q2Last = Quotes[qKeys[1]][1]
    var q2PChange = Quotes[qKeys[1]][2]
    var q3Symbol = qKeys[2]
    var q3Url = Quotes[qKeys[2]][3]
    var q3Name = Quotes[qKeys[2]][0]
    var q3Last = Quotes[qKeys[2]][1]
    var q3PChange = Quotes[qKeys[2]][2]
    var q4Symbol = qKeys[3]
    var q4Url = Quotes[qKeys[3]][3]
    var q4Name = Quotes[qKeys[3]][0]
    var q4Last = Quotes[qKeys[3]][1]
    var q4PChange = Quotes[qKeys[3]][2]
    var q5Symbol = qKeys[4]
    var q5Url = Quotes[qKeys[4]][3]
    var q5Name = Quotes[qKeys[4]][0]
    var q5Last = Quotes[qKeys[4]][1]
    var q5PChange = Quotes[qKeys[4]][2]
    var q6Symbol = qKeys[5]
    var q6Url = Quotes[qKeys[5]][3]
    var q6Name = Quotes[qKeys[5]][0]
    var q6Last = Quotes[qKeys[5]][1]
    var q6PChange = Quotes[qKeys[5]][2]

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
