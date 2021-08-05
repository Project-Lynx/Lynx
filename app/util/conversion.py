#----------------------------
# Import modules
#----------------------------
from flask import jsonify
import json
import csv
#----------------------------

#----------------------------
# Convert csv into json
#----------------------------
def csv_to_json(path):

    # Null hashtable
    output = {}

    # Read csv file
    with open(path) as csvfile:
        csv_reader = csv.DictReader(csvfile)

        # Convert each row to dict
        for rows in csv_reader:
            key = rows["Timestamp"]
            keys = output.keys()

            if key in keys:
                output[key].append({"Type": rows["Type"], "Content": rows["Content"]})
            else:
                output[key] = [{"Type": rows["Type"], "Content": rows["Content"]}]
    
    return jsonify(output)
#----------------------------