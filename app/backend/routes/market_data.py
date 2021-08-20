from app.backend.repositories import market_data as mkt_repo
from flask import Blueprint, request

blueprint = Blueprint("market_data", __name__)

@blueprint.route('/Quotes', methods=['POST'])
def Quotes():
    symbols = (request.data).decode("utf-8")
    data = mkt_repo.get_quotes(symbols)

    return data


@blueprint.route('/Hist', methods=['POST'])
def Hist():
    symbol = (request.data).decode("utf-8")
    data = mkt_repo.get_hist(symbol)

    return data