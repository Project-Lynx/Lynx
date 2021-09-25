import { useState, useEffect } from 'react';

import './../../assets/css/Homepage/Notes.css'
import './../../assets/css/Homepage/Homepage.css'

const Notes = () => {
    const [Notes, setNotes] = useState('not working');
    useEffect(() => {
      fetch('http://127.0.0.1:5000/ExportNotes').then(res => res.json()).then(data => {
        setNotes(data);
      });
    }, []);

    var titles = new Array();
    var texts = new Array();

    function NewTitle() {
      var name = "Title";
      var newTitle = document.createElement('input');
      newTitle.setAttribute("type", "text")
      newTitle.setAttribute("placeholder", name)
      newTitle.setAttribute("class", name)
      newTitle.setAttribute("id", "note-item")
      newTitle.setAttribute("name", "title")
      titles.push(name)
      var workspace = document.getElementById('workspace');
      workspace.appendChild(newTitle);
    }

    function NewText() {
      var text = "Type your notes..."
      var newText =  document.createElement('textarea');
      newText.setAttribute("placeholder", text)
      newText.setAttribute("class", "notes-textarea")
      newText.setAttribute("id", "note-item")
      texts.push(text)
      var workspace = document.getElementById('workspace');
      workspace.appendChild(newText);
    }

    function ClearNotes() {
      try {
        var test = document.getElementById('note-item');
        test.remove();
      } catch (e) {
      }
    }

    function SaveNotes() {
      var elements = document.querySelectorAll('#note-item');
      var elements2 = [...elements];

      const output = [];
      elements2.forEach(element => {
        const check = element.getAttribute('class');
        if (check == "Title") {
          output.push({ title : element.value });
        } else {
          output.push({ text : element.value });
        }
      });

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(output)
        };
        fetch('http://127.0.0.1:5000/UpdateNotes', requestOptions)
    }

    function ImportNotes() {
        var key = Object.keys(Notes)[0]
        for (var i=0; i < Notes[key].length; i++) {
          if (Notes[key][i].Type == "title") {
            var name = "Title";
            var newTitle = document.createElement('input');
            newTitle.setAttribute("type", "text")
            newTitle.setAttribute("placeholder", Notes[key][i].Content)
            newTitle.setAttribute("class", name)
            newTitle.setAttribute("id", "note-item")
            newTitle.setAttribute("name", "title")
            var workspace = document.getElementById('workspace');
            workspace.appendChild(newTitle);
          } else {
            var newText =  document.createElement('textarea');
            newText.setAttribute("placeholder", Notes[key][i].Content)
            newText.setAttribute("class", "notes-textarea")
            newText.setAttribute("id", "note-item")
            var workspace = document.getElementById('workspace');
            workspace.appendChild(newText);
          }
        }
    }

    return (
        <div className="notes-main">

          <div className="notes-header">
            <div className="notes-btn1">
              <div onClick={() => NewTitle()}>Title</div>
            </div>
            <div className="notes-btn2">
              <div onClick={() => NewText()}>Text</div>
            </div>
            <div className="notes-btn2">
              <span onClick={() => ClearNotes()}>Clear</span>
            </div>
            <div className="notes-btn2">
              <span onClick={() => SaveNotes()}>Save</span>
            </div>
            <div className="notes-btn2">
              <span onClick={() => ImportNotes()}>Import</span>
            </div>
          </div>

          <div id="notes-content">
            <div id="workspace">

            </div>
          </div>

        </div>
    )
}

export default Notes;
