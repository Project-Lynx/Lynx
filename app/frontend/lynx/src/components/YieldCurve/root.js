import NavBar from './../Meta/NavBar.js'
import NewsFeed from './../Meta/NewsFeed.js'
import QouteBoard from './../Meta/QouteBoard.js'
import Graph from './graph.js'

import './../../assets/css/Meta/Bootstrap.css'
import './../../assets/css/YieldCurve/layout.css'


function YieldCurve() {
  return (
    <div className="YC-container">
      <div id="navbar">
        {NavBar()}
      </div>
      <div id="newsfeed">
        {NewsFeed()}
      </div>
      <div id="qoutes">
        {QouteBoard()}
      </div>
      <div id="YC-graph">
        {Graph()}
      </div>
    </div>
  )
}

export default YieldCurve;
