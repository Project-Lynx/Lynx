from app.backend.routes import (news_n_events, notes,
                                market_data)
from flask import Flask
from flask_cors import CORS

application = Flask(__name__)
app = application
CORS(app)

app.register_blueprint(news_n_events.blueprint)
app.register_blueprint(market_data.blueprint)
app.register_blueprint(notes.blueprint)


@app.route("/")
def healthcheck():
    return "ok"
