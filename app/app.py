import sqlite3
from flask import Flask, jsonify, render_template
import os
import sqlite3


app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)