#----------------------------
# Import modules
#----------------------------
from flask import jsonify
from app.util import keys
import requests as req
import datetime as dt
import json
#----------------------------

#----------------------------
# Get quotes
#----------------------------
def get_quotes(symbols):
    symbols = list(symbols.split(","))
    url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes"
    query = { "region": "US", "symbols": f"{ ','.join(symbols) }" }
    headers = {
        'x-rapidapi-key': keys.YFIN_API_KEY,
        'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
    
    now = str(dt.datetime.now().strftime("%H:%M:%S"))
    response = req.request("GET", url, headers=headers, params=query)

    data = json.loads(response.text)

    output = {}
    for idx in enumerate(symbols):
        symbol = data['quoteResponse']['result'][idx[0]]['symbol']
        output[symbol] = {
            'name': data['quoteResponse']['result'][idx[0]]['shortName'],
            'last': data['quoteResponse']['result'][idx[0]]['regularMarketPrice'],
            'pchange': f"{round(data['quoteResponse']['result'][idx[0]]['regularMarketChangePercent'],3)}%",
            'url': f"https://finance.yahoo.com/quote/{symbol}?p={symbol}"
        }

    return jsonify(output)
#----------------------------
