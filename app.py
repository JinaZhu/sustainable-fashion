from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__, static_folder='./build', static_url_path='/')
# telling our app where the database is located
# three slashes is a relative path, four is absolute
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return 'added'


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.route('/hello', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        return jsonify('hello')
    else:
        return jsonify('hi')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))
