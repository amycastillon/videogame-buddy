import sqlite3
from flask import Flask, jsonify, render_template
import os
import sqlite3


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/videogame_buddy.html')
def vgbuddy():
    return render_template('videogame_buddy.html')

@app.route('/browse_games.html')
def browse():
    return render_template('browse_games.html')

@app.route('/results.html')
def results():
    return render_template('results.html')





if __name__ == '__main__':
    app.run(debug=True)