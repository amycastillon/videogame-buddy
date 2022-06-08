# from crypt import methods
from multiprocessing import dummy
import sqlite3
from flask import *
import os
import sqlite3
from numpy import recfromcsv
import pandas as pd
from re import search
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf

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
    df = pd.read_json(r'static\json_files\full_json.json').dropna().drop_duplicates()   

    first_run = True
    for category in search:
        # print(category)
        for term in search[f'{category}']:
            term = term.strip()
            search_result = df.loc[df[category].str.contains(f"{term}", case=False)]
            if first_run:
                complete_df = search_result
                first_run = False
            else:
                complete_df = pd.concat([complete_df,search_result]).drop_duplicates()
            # print(term)

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

@app.route('/trainAI', methods = ['POST'])
def train():
    input = request.get_json()

    df = pd.read_json(r'static\json_files\full_json.json').dropna().drop_duplicates(subset='title')
    df.drop('summary',axis=1,inplace=True)

    dummy_master = pd.get_dummies(df)

    train_df = pd.DataFrame()
    search_result = pd.DataFrame()

    for title in input['name']:        
        
        try:
            search_result = dummy_master.loc[dummy_master[f'title_{title}'] == 1]
        except:
            print(f"Couldn't find {title}")
        
        train_df = pd.concat([search_result,train_df])
    
    # print(len(train_df))
    # print(len(input['status']))

    train_df['like'] = input['status']

    # print(train_df.head(5))

    train_df.drop(['Unnamed: 0'], axis=1,inplace=True)

    # dummy_df = pd.get_dummies(train_df)
    the_input_dim = train_df.shape[1] - 1

    X = train_df.drop('like',axis=1)
    y = train_df['like']

    dummy_master.drop('Unnamed: 0',axis=1,inplace=True)

    # print(f"X shape: {X.shape}")
    # print(f"dummy_master shape: {dummy_master.shape}")

    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42, stratify=y)

    scaler = StandardScaler()
    X_scaler = scaler.fit(X_train)
    X_train_scaled = X_scaler.transform(X_train)
    X_test_scaled = X_scaler.transform(X_test)

# stop = False
# while stop == False:
    nn = tf.keras.models.Sequential()
    nn.add(tf.keras.layers.Dense(units=60, activation='relu', input_dim=the_input_dim))
    nn.add(tf.keras.layers.Dense(units=30, activation='relu'))
    nn.add(tf.keras.layers.Dense(units=1, activation='sigmoid'))
    nn.summary()

    nn.compile(loss="binary_crossentropy", optimizer="adam", metrics=["accuracy"])

    # fit_model = nn.fit(X_train_scaled, y_train, epochs=10)

    model_loss, model_accuracy = nn.evaluate(X_test_scaled,y_test,verbose=2)
    print(f"Loss: {model_loss}, Accuracy: {model_accuracy}")

    dummy_master['like'] = nn.predict(x=dummy_master)

    predict_result = dummy_master.loc[dummy_master['like'] > .3].sample(n=5)

    for column in predict_result.columns:
        empty = True
        for value in predict_result[column]:
            if(value == 1):
                empty=False
        if(empty == True):
            predict_result.drop(column,axis=1,inplace=True)

    recommended_games = predict_result.columns[0:5].to_list()

    for x in range(5):
        recommended_games[x] = recommended_games[x].split('_',1)[1]
        print(recommended_games[x])

    


    # print(predict_result)
    # print(predict_result.shape)
    return jsonify(recommended_games)
    

if __name__ == '__main__':
    app.run(debug=False)
