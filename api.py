from flask import Flask, request
from flask_cors import CORS

from app.backend import events, market_data, newsfeed, notes

app = Flask(__name__)
CORS(app)


@app.route('/News')
def News():
    data = newsfeed.get_feed()

    return data


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


@app.route('/UpdateNotes', methods=['POST'])
def UpdateNotes():
    data = (request.data).decode("utf-8")
    notes.update(data)

    return "Success!"


@app.route('/ExportNotes')
def ExportNotes():
    data = notes.export()

    return data


@app.route('/EconEvents', methods=['POST'])
def EconEvents():
    regions = (request.data).decode("utf-8")
    data = events.get_events(regions)

    return data


@app.route('/5min')
def Min5():
    data = market_data.get_5min("SPY")

    return data


if __name__ == "__main__":
    app.run(debug=True)
