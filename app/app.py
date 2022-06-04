# from crypt import methods
import sqlite3
from flask import *
import os
import sqlite3
import pandas as pd
from re import search


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/api/filter_search', methods = ['POST'])
def search():
    search = request.get_json()
    # df = pd.read_json('static\json_files\full_json.json')

    for category in search:
        print(category)
        for term in search[f'{category}']:
            term = term.strip()
            print(term)



    return jsonify(search)

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

if __name__ == '__main__':
    app.run(debug=True)