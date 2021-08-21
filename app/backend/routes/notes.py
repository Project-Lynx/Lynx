from flask import Blueprint, request

from app.backend.repositories import notes as notes_repo

blueprint = Blueprint("notes", __name__)

@blueprint.route('/UpdateNotes', methods=['POST'])
def UpdateNotes():
    data = (request.data).decode("utf-8")
    notes_repo.update(data)

    return "Success!"


@blueprint.route('/ExportNotes')
def ExportNotes():
    data = notes_repo.export()

    return data
