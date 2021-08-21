from app.backend.util import news_filters

import requests as req
from bs4 import BeautifulSoup as bs
from flask import jsonify


def get_feed():
    url = "https://finance.yahoo.com/news"

    response = req.request("GET", url)
    parsed = bs(response.text, "lxml")

    output = {}
    urls = []
    titles = []
    articles = parsed.find_all("h3", {"class": "Mb(5px)"})

    for title in articles:
        d1 = str(title).find("href") + 6
        d2 = str(title)[d1:].find('"') + d1
        urls.append(f"https://finance.yahoo.com{str(title)[d1:d2]}")
        titles.append(title)

    titles_filtered = news_filters.clean(titles)

    for idx in enumerate(urls):
        output[f"Article {idx[0]+1}"] = {
            'Title': titles_filtered[idx[0]],
            'Url': idx[1],
        }

    return jsonify(output)
