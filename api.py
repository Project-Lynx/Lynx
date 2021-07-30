#----------------------------
# Import modules
#----------------------------
from app.util import keys
from app.backend import newsfeed
from flask import Flask, jsonify
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
    

#-----------------------
# Run Server
#-----------------------
if __name__ == "__main__":
    app.run(debug=True)
#-----------------------