import NavBar from './../NavBar.js'
import NewsFeed from './NewsFeed.js'
import QouteBoard from './QouteBoard.js'
import Notes from './Notes.js'
import Events from './Events.js'
import Graph from './Graph.js'
import SessionMap from './SessionMap.js'

import './../../assets/css/Homepage.css'
import './../../assets/css/Bootstrap.css'


function Home() {
  return (
    <div className="container">

      {NavBar()}

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
