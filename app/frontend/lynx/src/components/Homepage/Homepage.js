import NavBar from './../Meta/NavBar.js'
import NewsFeed from './../Meta/NewsFeed.js'
import QouteBoard from './../Meta/QouteBoard.js'
import Notes from './Notes.js'
import Events from './Events.js'
import Graph from './Graph.js'
import SessionMap from './SessionMap.js'

import './../../assets/css/Homepage/Homepage.css'
import './../../assets/css/Meta/Bootstrap.css'


function Home() {
  return (
    <div className="container">

      <div id="navbar">
        {NavBar()}
      </div>

      <div id="newsfeed">
          {NewsFeed()}
      </div>

      <div id="graph">
        {Graph()}
      </div>

      <div id="notes">
        {Notes()}
      </div>

      <div id="qoutes">
        {QouteBoard()}
      </div>

      <div id="events">
        {Events()}
      </div>

      <div id="yield-curve">
        {SessionMap()}
      </div>

    </div>
  )
}

export default Home;
