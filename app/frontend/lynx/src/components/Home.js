import React, { useState, useEffect, Component } from 'react';
import logo from './../assets/logo.png';
import './../assets/css/Home.css';

function Home() {

  // Getting newsfeed from flask api
  const [News, setNews] = useState('not working');
  useEffect(() => {
    fetch('http://127.0.0.1:5000/News').then(res => res.json()).then(data => {
      setNews(data);
      console.log(data);
    });
  }, []);


  function table_() {

    try {
      if (typeof News != "undefined") {
        var test2 = {
          articles: [
            {Title: News["Article 1"].Title, Url: News["Article 1"].Url},
            {Title: News["Article 2"].Title, Url: News["Article 2"].Url},
            {Title: News["Article 3"].Title, Url: News["Article 3"].Url},
            {Title: News["Article 4"].Title, Url: News["Article 4"].Url},
            {Title: News["Article 5"].Title, Url: News["Article 5"].Url},
            {Title: News["Article 6"].Title, Url: News["Article 6"].Url},
            {Title: News["Article 7"].Title, Url: News["Article 7"].Url},
            {Title: News["Article 8"].Title, Url: News["Article 8"].Url},
            {Title: News["Article 9"].Title, Url: News["Article 9"].Url},
            {Title: News["Article 10"].Title, Url: News["Article 10"].Url}
          ]
        }

        return test2.articles.map((article, index) => {
          const { Title, Url } = article
          return (
            <tr>
              <td>
                <a className="td-link" href={Url} target="_blank">
                  {Title}
                </a>
              </td>
            </tr>
          )
        })
      }
    } catch (e) {
      
    }
  }

  return (
    <div className="row">

      <div className="top-bar">
        
        <div className="logo-box">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="main-box">
          <div  className="cmd-box">
            <form action="/test" method="get">
              <input 
                  type="text"
                  id="input"
                  placeholder="Enter Command..."
                  name="page"
              />
            </form>
          </div>
        </div>

      </div>

      <div className="news-box">
        <div className="div-news">
            <table className="table-news">
                {table_()}
            </table>
        </div>
      </div>

  </div>
  )
}

export default Home;
