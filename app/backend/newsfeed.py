#----------------------------
# Import modules
#----------------------------
from flask import jsonify
from app.util import keys
import requests as req
import pandas as pd
import json
#----------------------------

#----------------------------
# Get newsfeed
#----------------------------
def get_feed():
    news_request = req.get(f"https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey={keys.NEWS_API_KEY}")
    json_data = news_request.json()['articles']
    df = pd.DataFrame(json_data)
    df = df[["title", "url"]]
    max_rows = 10
    
    dict_ = {}
    titles = [i for i in df["title"]]
    urls = [i for i in df["url"]]

    for idx in enumerate(titles):
        dict_[f"Article {idx[0]+1}"] = {"Title": idx[1], "Url": urls[idx[0]]}
    
    return jsonify(dict_)
#----------------------------