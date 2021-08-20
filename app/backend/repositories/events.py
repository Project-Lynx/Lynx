import json

import requests as req
from flask import jsonify

from app.backend import config


def get_events(regions):
    endpoint = '/get-econ-events'
    response = req.post(config.dReserve + endpoint, regions)
    response = json.loads(response.text)

    return jsonify(response), 200
