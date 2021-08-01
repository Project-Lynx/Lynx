#----------------------------
# Import modules
#----------------------------
from app.util import keys
from app.backend import newsfeed
from app.backend import yfin
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests as req
import pandas as pd
import json
#----------------------------
app = Flask(__name__)
CORS(app)

"""
    Newsfeed endpoint 
"""
@app.route('/News')
def News():
    data = newsfeed.get_feed()
    return data

"""
    Quotes endpoint
"""
@app.route('/Quotes', methods=['POST'])
def Quotes():
    symbols = (request.data).decode("utf-8")
    data = yfin.get_quotes(symbols)
    return data
    
#-----------------------
# Run Server
#-----------------------
if __name__ == "__main__":
    app.run(debug=True)
#-----------------------