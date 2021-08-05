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
# Get quotes
#----------------------------
def get_quotes(symbols):

    # Turn string of symbols to list
    symbols = list(symbols.split(","))

    # Initialize hashtable
    output = {}

    # Get data for each symbol
    for x in symbols:

        # Target url
        url = f"https://finance.yahoo.com/quote/{x}?p={x}"
        
        # Page source
        response = req.request("GET",url)
        # Parse with lxml
        parsed = bs(response.text,"lxml")

        # Defining variables
        names = parsed.find_all('h1')
        price = parsed.find('span', {'data-reactid' : '32'}).string
        price = float(price.replace(",",""))
        change = parsed.find('span', {'data-reactid' : '33'}).string    
        d1 = change.find('(')+1
        d2 = change.find(')')

        # Filling hashtable
        for name in names:
            delim = name.string.find('(')-1
            if "Futures," in name.string:
                name = name.string.replace('Futures,', '')
                delim = name.find('(')-1
                output[x] = {'name': name[:delim]}
            else:
                output[x] = {'name': name.string[:delim]}
        output[x]["last"] = round(price,2)
        output[x]["pchange"] = change[d1:d2]
        output[x]["url"] = url

    # Output the hashtable as JSON
    return jsonify(output)
#----------------------------

