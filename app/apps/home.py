#------------------------------------
# Import Modules                    
#------------------------------------
import json
import base64
import datetime
import requests as req
import math
import pandas as pd
import flask
import dash
import dash_core_components as dcc
import dash_bootstrap_components as dbc
import dash_html_components as html
import dash_table
import pathlib
from dash.dependencies import Input, Output, State
from plotly import tools
from dash_app import app
from app.util import paths, keys
#------------------------------------

    
#------------------------------------
# News api
#------------------------------------
def update_news():
    news_request = req.get(f"https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey={keys.NEWS_API_KEY}")
    json_data = news_request.json()['articles']
    df = pd.DataFrame(json_data)
    df = df[["title", "url"]]
    max_rows = 15

    return html.Div(
       children=[
            html.Div(className="p-news", children="Headlines"),
            html.Div(
                className="p-news float-right",
                children="Last update : "
                + datetime.datetime.now().strftime("%H:%M:%S"),
            ),
            html.Table(
                className="table-news",
                children=[
                    html.Tr(
                        children=[
                            html.Td(
                                children=[
                                    html.A(
                                        className="td-link",
                                        children=df.iloc[i]["title"],
                                        href=df.iloc[i]["url"],
                                        target="_blank",
                                    )
                                ]
                            )
                        ]
                    )
                    for i in range(min(len(df), max_rows))
                ],
            ),
        ] 
    )
#------------------------------------


#------------------------------------
# Commands List                     #
#------------------------------------
df_c = pd.read_csv(paths.DATA_PATH.joinpath('commands_list.csv'))
styles_ccl = []
styles_ccl.append({
            'if': {'row_index': 'odd'},
            'backgroundColor': '#1D262F'
        })
styles_ccl.append({
            'if': {'row_index': 'even'},
            'backgroundColor': '#242E3F'
        }) 
styles_ccl.append({
            'color': 'white'
        })
#------------------------------------

#------------------------------------
# Layout                            #
#------------------------------------
layout = html.Div(
    className="row",
    children=[
        # Interval component for live clock
        dcc.Interval(id="interval", interval=1 * 1000, n_intervals=0),
        # Interval component for graph updates
        dcc.Interval(id="i_tris", interval=1 * 5000, n_intervals=0),
        # Interval component for news updates
        dcc.Interval(id="i_news", interval=1 * 60000, n_intervals=0),

        # Left Panel Div
        html.Div(
            className = "three columns div-left-panel",
            children = 
            [
                html.Div(
                    className = "div-info",
                    children = 
                    [
                        html.Img(
                            className="logo", src=app.get_asset_url("logo.png")
                        )
                    ],
                ),
                html.Div(
                    className = "div-news",
                    children = [html.Div(id="news", children=update_news())],
                ),
            ],
        ),

        # Navbar (Command Line Bar)
        html.Div(
            className = "nine columns div-right-panel",
            children = 
            [
                dbc.Navbar(className="cmdTest", children= 
                [
                    dbc.Col(dbc.NavbarBrand("Lynx", href="/apps/home"), sm=3, md=2),
                    dbc.Col(dbc.Input(id="input", type="search", 
                    placeholder="Enter Command..." , debounce=True)),
                    html.P(id='output'),
                ],
                color = "#1D262F",
                dark = True,
                ),
            ],
        ),

        # Common Command's List
        html.Div(
            className = "test columns CCL", 
            children =
            [
                html.P(className='CCL-Title', children=["Common Command List"]),
                dash_table.DataTable(
                    id = 'Command-Table',
                    columns = [{"name": i,"id": i} for i in df_c.columns],
                    data = df_c.to_dict('records'),
                    style_data_conditional = styles_ccl,
                    style_cell = {'textAlign': 'center','border': '0.01px solid #87B4E5'},
                    style_header = {'backgroundColor':'#1D262F'}
                )
            ]
        )

    ],
)

#------------------------------------
# Dynamic Callbacks                 #
#------------------------------------

# Callback function to update command bar
@app.callback(Output("output", "children"), [Input("input", "value")])
def output_text(value):
    if value == "/home":
        return dcc.Location(id='home__',pathname='/apps/home')
    if value == None:
        null = []
    else:
        print('incorrect command!')

# Callback to update live clock
@app.callback(Output("live_clock", "children"), [Input("interval", "n_intervals")])
def update_time(n):
    return datetime.datetime.now().strftime("%H:%M:%S")


# Callback to update news
@app.callback(Output("news", "children"), [Input("i_news", "n_intervals")])
def update_news_div(n):
    return update_news()
#------------------------------------

