#------------------------------------
# Importing Modules                    
#------------------------------------
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
from dash_app import app
from app.apps import home
#------------------------------------

#------------------------------------
# Print message
#------------------------------------
print("Lynx is running on http://127.0.0.1:8050/apps/home")
#------------------------------------

#------------------------------------
# Layout
#------------------------------------
app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    html.Div(id='page-content')
])
#------------------------------------

#------------------------------------
# Callbacks
#------------------------------------
@app.callback(Output('page-content', 'children'),
              [Input('url', 'pathname')])
def display_page(pathname):
    if pathname == '/apps/home':
        return home.layout
    else:
        return '404'
#------------------------------------

#------------------------------------
# Running Server                    
#------------------------------------
if __name__ == '__main__':
    app.run_server(debug=True)
#------------------------------------

