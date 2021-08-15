from app.util import links

from flask import jsonify
import requests as req
import json


def get_quotes(symbols):
    endpoint = '/get-quotes'
    response = req.post(links.dReserve + endpoint, symbols)
    response = json.loads(response.text)
    
    return jsonify(response), 200

def get_hist(symbol):
    endpoint = '/get-hist'
    response = req.post(links.dReserve + endpoint, symbol)
    response = json.loads(response.text)

    return jsonify(response), 200
