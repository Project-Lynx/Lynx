import csv
import datetime as dt
from typing import Any

from app.backend.util import conversion


# Export saved notes data
def export() -> Any:
    return conversion.csv_to_json('app/backend/data/notes.csv')


# Handle logic behind daving notes
def handler(data: str) -> None:
    data_list = list(data.split("{"))
    parsed = parse(data_list)
    save(parsed)


# Parse saved notes data
def parse(data: list) -> list:
    timestamp = dt.datetime.now().strftime("%m/%d/%Y %H:%M")
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
    rows = []
    for idx in enumerate(types):
        rows.append([timestamp, idx[1], content[idx[0]]])
    return rows


# Save parsed notes data
def save(rows: list) -> None:
    columns = ["Timestamp", "Type", "Content"]
    with open('app/backend/data/notes.csv', 'w') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(columns)
        for row in rows:
            csvwriter.writerow(row)
