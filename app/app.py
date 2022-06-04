from crypt import methods
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

@app.route('/filter_search',methods = ['POST','GET'])
def search(submission):
    return jsonify(submission)

if __name__ == '__main__':
    app.run(debug=True)