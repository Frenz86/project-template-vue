from flask import Flask, jsonify,request, make_response, abort, send_from_directory,send_file
from flask_cors import CORS
import io, os
import pandas as pd
import numpy as np
from datetime import datetime

'''
gunicorn -w 4 -b 0.0.0.0:8000 app:app 
'''

# Set up the app and point it to Vue
app = Flask(__name__, static_folder='../client/dist/',    static_url_path='/')
#app = Flask(__name__)
#app.config.from_object(__name__)

# Set up the index route
@app.route('/')
@app.route('/admin')
@app.route('/process2')
def index():
    return app.send_static_file('index.html')

CORS(app, resources={r'/*': {'origins': '*'}})


if __name__ == '__main__':
    app.run(host='0.0.0.0')