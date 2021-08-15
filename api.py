from app.util import keys
from app.backend import newsfeed, notes, events, market_data

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests as req
import pandas as pd
import json


app = Flask(__name__)
CORS(app)

# Newsfeed endpoint 
@app.route('/News')
def News():
    data = newsfeed.get_feed()
    
    return data

# Quotes endpoint
@app.route('/Quotes', methods=['POST'])
def Quotes():
    symbols = (request.data).decode("utf-8")
    data = market_data.get_quotes(symbols)

    return data

@app.route('/Hist', methods=['POST'])
def Hist():
    symbol = (request.data).decode("utf-8")
    data = market_data.get_hist(symbol)

    return data


# Update notes endpoint
@app.route('/UpdateNotes', methods=['POST'])
def UpdateNotes():
    data = (request.data).decode("utf-8")
    notes.update(data)

    return "Success!"

# Export notes endpoint
@app.route('/ExportNotes')
def ExportNotes():
    data = notes.export()
  
    return data
    
# Econ events endpoint
@app.route('/EconEvents')
def EconEvents():
    data = events.get_events()
    
    return data 

# 5 Min data aggr endpoint
@app.route('/5min')
def Min5():
    data = market_data.get_5min("SPY")
    
    return data 

#-----------------------
# Run Server
#-----------------------
if __name__ == "__main__":
    app.run(debug=True)
#-----------------------
