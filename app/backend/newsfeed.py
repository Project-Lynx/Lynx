#----------------------------
# Import modules
#----------------------------
from bs4 import BeautifulSoup as bs
from flask import jsonify
import requests as req
import datetime as dt
import json
import lxml
#----------------------------


#----------------------------
# Get feed
#----------------------------
def get_feed():

    # Target url
    url = "https://finance.yahoo.com/news"

    # Page source
    response = req.request("GET", url)
    # Parse with lxml
    parsed = bs(response.text,"lxml")

    # Defining variables
    output = {}
    urls = []
    titles = []
    articles = parsed.find_all("h3", {"class" : "Mb(5px)"})

    # Filling list's with data
    for title in articles:
        d1 = str(title).find("href") + 6
        d2 = str(title)[d1:].find('"') + d1
        urls.append(f"https://finance.yahoo.com{str(title)[d1:d2]}")
        
        # Filtering wraps
        if "UPDATE 1-" in title.text:
            title_ = str(title.text).replace("UPDATE 1-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "UPDATE 2-" in title.text:
            title_ = str(title.text).replace("UPDATE 2-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "UPDATE 3-" in title.text:
            title_ = str(title.text).replace("UPDATE 3-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "UPDATE 4-" in title.text:
            title_ = str(title.text).replace("UPDATE 4-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "UPDATE 5-" in title.text:
            title_ = str(title.text).replace("UPDATE 5-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "Exclusive-" in title.text:
            title_ = str(title.text).replace("Exclusive-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "US STOCKS-" in title.text:
            title_ = str(title.text).replace("US STOCKS-","")
            if len(title_) >= 69:
                title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "COVID SCIENCE-" in title.text:
            title_ = str(title.text).replace("COVID SCIENCE-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "TREASURIES-" in title.text:
            title_ = str(title.text).replace("TREASURIES-","")
            if len(title_) >= 69:
               title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "EMERGING MARKETS-" in title.text:
            title_ = str(title.text).replace("EMERGING MARKETS-","")
            if len(title_) >= 69:
                title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        if "GLOBAL MARKETS-" in title.text:
            title_ = str(title.text).replace("GLOBAL MARKETS-","")
            if len(title_) >= 69:
                title_ = title_[:69] + "..."
            titles.append(title_)
            continue
        else:
            if len(title.text) >= 69:
                title = title.text[:69] + "..."
                titles.append(title)
                continue
            else:
                titles.append(title.text)
                continue

    # Filling hashtable with data
    for idx in enumerate(urls):
        output[f"Article {idx[0]+1}"] = {
            'Title': titles[idx[0]],
            'Url': idx[1]
        }

    # Return hashtable as json
    return jsonify(output)
#----------------------------