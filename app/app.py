# from crypt import methods
import sqlite3
from flask import Flask, jsonify, render_template
from flask import redirect, url_for, request
import os
import sqlite3


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/api/filter_search')
def search():
    return jsonify('hello')

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
def finalresults():
    return render_template('data.html')

if __name__ == '__main__':
    app.run(debug=True)