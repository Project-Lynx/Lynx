import csv
from typing import Any

from flask import jsonify


def csv_to_json(path: str) -> Any:
    output: dict = {}
    with open(path) as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for rows in csv_reader:
            key = rows["Timestamp"]
            keys = output.keys()
            if key in keys:
                output[key].append({"Type": rows["Type"], "Content": rows["Content"]})
            else:
                output[key] = [{"Type": rows["Type"], "Content": rows["Content"]}]

    return jsonify(output)
