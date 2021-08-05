#----------------------------
# Import modules
#----------------------------
from bs4 import BeautifulSoup as bs
from app.util import conversion
from flask import jsonify
import requests as req
import datetime as dt
import json
import csv
#----------------------------


#----------------------------
# Update notes data
#----------------------------
def update(data):

    # Use timestamp as saved notes index
    timestamp = dt.datetime.now().strftime("%m/%d/%Y %H:%M")

    # Parsing data
    data = list(data.split("{"))
    types = []
    content = []
    for i in data:
        if "title" in i or "text" in i:
            end = i[1:].find('"')+1
            types.append(i[1:end])
            content_start = i[end:].find(':')
            content_base = i[end+content_start+2:]
            content_end = content_base.find('"')
            content_text = content_base[:content_end]

            content.append(content_text)

    # Render rows for dataset
    column_names = ["Timestamp","Type","Content"]
    rows = []
    for idx in enumerate(types):
        rows.append([timestamp,idx[1],content[idx[0]]])
   
    # Add rows to dataset
    with open('app/data/notes.csv', 'w') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(column_names)

        for row in rows:
            csvwriter.writerow(row)
#----------------------------
   
#----------------------------
# Exporting Notes to web app
#----------------------------
def export():

    # Returning json version of notes csv file
    return conversion.csv_to_json('app/data/notes.csv')
#----------------------------