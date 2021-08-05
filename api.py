#----------------------------
# Import modules
#----------------------------
from app.util import keys
from app.backend import newsfeed, yfin, notes
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

"""
    Update notes
"""
@app.route('/UpdateNotes', methods=['POST'])
def UpdateNotes():
    data = (request.data).decode("utf-8")
    notes.update(data)

    return "Success!"

"""
   Endpoint to import notes to web app
"""
@app.route('/ExportNotes')
def ExportNotes():
    data = notes.export()
    return data
    
    
#-----------------------
# Run Server
#-----------------------
if __name__ == "__main__":
    app.run(debug=True)
#-----------------------