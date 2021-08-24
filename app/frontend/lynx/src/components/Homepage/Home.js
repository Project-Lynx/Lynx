import News from './News'
import quoteBoard from './quoteBoard'
import Notes from './Notes'
import EconEvents from './Events'
import Graph from './Graph'
import TopBar from './topBar'
import TwitterNews from './TwitterNews'
import TwitterSocial from './TwitterSocial'

import './../../assets/css/Meta.css';
import './../../assets/css/Bootstrap.css';

function Home() {

  return (
    <div className="row">

      <div className="top-bar-box">
        {TopBar()}
      </div>

      <div className="news-box">
        <div className="div-news">
            <table className="table-news">
                {News()}
            </table>
        </div>
      </div>

      <div className="quotes-box">
        {quoteBoard()}
      </div>

      <div className="notes-box">
        {Notes()}
      </div>

      <div className="events-box">
        {EconEvents()}
      </div>

      <div className="graph-box">
        {Graph()}
      </div>

      <div className="twitter-news-box">
        {TwitterNews()}
      </div>

      <div className="twitter-social-box">
        {TwitterSocial()}
      </div>

  </div>
  )
}

export default Home;
