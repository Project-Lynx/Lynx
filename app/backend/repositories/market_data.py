from app.backend import config

from flask import jsonify
import requests as req
import json


def get_quotes(symbols):
    endpoint = '/get-quotes'
    response = req.post(config.dReserve + endpoint, symbols)
    response = json.loads(response.text)

    return jsonify(response), 200

def get_hist(symbol):
    endpoint = '/get-hist'
    response = req.post(config.dReserve + endpoint, symbol)
    response = json.loads(response.text)

    return jsonify(response), 200
