from flask import Flask
import os
# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__, static_folder='./client/build', static_url_path='/')


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))
