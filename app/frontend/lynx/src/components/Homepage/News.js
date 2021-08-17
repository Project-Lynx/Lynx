import { useState, useEffect } from 'react';
import './../../assets/css/Homepage/news.css';


const News = () => {
  const [NewsData, setNewsData] = useState('not working');
  useEffect(() => {
    fetch('http://127.0.0.1:5000/News').then(res => res.json()).then(data => {
      setNewsData(data);
    });
  }, []);

  function newsTable() {
      try {
        if (typeof News != "undefined") {
          var test2 = {
            articles: [
              {Title: NewsData["Article 1"].Title, Url: NewsData["Article 1"].Url},
              {Title: NewsData["Article 2"].Title, Url: NewsData["Article 2"].Url},
              {Title: NewsData["Article 3"].Title, Url: NewsData["Article 3"].Url},
              {Title: NewsData["Article 4"].Title, Url: NewsData["Article 4"].Url},
              {Title: NewsData["Article 5"].Title, Url: NewsData["Article 5"].Url},
              {Title: NewsData["Article 6"].Title, Url: NewsData["Article 6"].Url},
              {Title: NewsData["Article 7"].Title, Url: NewsData["Article 7"].Url},
              {Title: NewsData["Article 8"].Title, Url: NewsData["Article 8"].Url},
              {Title: NewsData["Article 9"].Title, Url: NewsData["Article 9"].Url},
              {Title: NewsData["Article 10"].Title, Url: NewsData["Article 10"].Url}
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
          console.log(e)
      }
  }

  return newsTable();

}

export default News;
