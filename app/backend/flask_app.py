from flask import Flask
from flask_cors import CORS

from app.backend.routes import notes

application = Flask(__name__)
app = application
app.config['JSON_SORT_KEYS'] = False
CORS(app)

app.register_blueprint(notes.blueprint)


@app.route("/")
def healthcheck():
    return "ok"
