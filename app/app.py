# from crypt import methods
import sqlite3
from flask import *
import os
import sqlite3
import pandas as pd
from re import search

from sqlalchemy import false


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/thirtyGames', methods = ['POST'])
def search():

    
    search = request.get_json()
    df = pd.read_json(r'..\app\static\json_files\full_json.json').dropna()   

    first_run = True
    for category in search:
        print(category)
        for term in search[f'{category}']:
            term = term.strip()
            search_result = df.loc[df[category].str.contains(f"{term}", case=False)]
            if first_run:
                complete_df = search_result
                first_run = False
            else:
                complete_df = pd.concat([complete_df,search_result]).drop_duplicates()
            print(term)
    complete_df = complete_df.sort_values(by='userscore', ascending=False).head(100)

    #method 1
    data = complete_df.sample(n=30)['title'].to_list()

    return jsonify(data)

    ####################################################################

    # method 2
    # data = {
    #     "games": complete_df.sample(n=30)['title'].to_list()
    #     }

    # return render_template('results.html', data=data)


@app.route('/videogame_buddy.html')
def vgbuddy():
    return render_template('videogame_buddy.html')

@app.route('/browse_games.html')
def browse():
    return render_template('browse_games.html')

@app.route('/results.html')
def results():
    return render_template('results.html')

@app.route('/finalresults.html')
def finalresults():
    return render_template('finalresults.html')

@app.route('/data.html')
def data():
    return render_template('data.html')

@app.route('/trainAI')
def train():
    return('placeholder')

if __name__ == '__main__':
    app.run(debug=True)