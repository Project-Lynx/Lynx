import csv
import datetime as dt

from app.util import conversion


def update(data):
    timestamp = dt.datetime.now().strftime("%m/%d/%Y %H:%M")

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

    column_names = ["Timestamp", "Type", "Content"]
    rows = []
    for idx in enumerate(types):
        rows.append([timestamp, idx[1], content[idx[0]]])

    with open('app/data/notes.csv', 'w') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(column_names)

        for row in rows:
            csvwriter.writerow(row)


def export():
    return conversion.csv_to_json('app/data/notes.csv')
