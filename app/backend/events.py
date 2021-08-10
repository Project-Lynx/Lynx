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
# Getting data
#----------------------------
def get_events():

    # Handeling the request
    url = "https://finance.yahoo.com/calendar/economic/"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"} 
    response = req.request("GET",url,headers=headers) 

    # Parsing the response
    parsed = bs(response.text,"lxml")
    data_table = parsed.find("tbody", {'data-reactid' : '33'})
    data_rows = data_table.find_all("tr")

    # Defining lists
    name = []
    region = []
    time = []
    actual = []
    expectation = []

    # Filling lists
    for row in data_rows:

        countrys = row.find_all("td", {'aria-label' : "Country"})
        for country in countrys:

            if country.text == "US": 
                region.append(country.text)

                events = row.find_all("td", {'aria-label' : "Event"})
                for event in events:
                    name.append((event.text).replace("*",""))
        
                event_times = row.find_all("td", {'aria-label' : "Event Time"})
                for t in event_times:
                    time.append(t.text)
                actual_ = row.find_all("td", {'aria-label' : "Actual"})
                for x in actual_:
                    actual.append(x.text)
                expecs = row.find_all("td", {'aria-label' : "Market Expectation"})
                for expec in expecs:
                    expectation.append(expec.text)
    
    # Rendering hashtable
    output = {}
    for idx in enumerate(name):
        output[idx[1]] = {
            "Region": region[idx[0]],
            "Time": time[idx[0]],
            "Actual": actual[idx[0]],
            "Expectation": expectation[idx[0]]
        }                

    # Return hashtable as json           
    return jsonify(output)
#----------------------------

