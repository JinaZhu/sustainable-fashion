from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
import os


# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__, static_folder='./build', static_url_path='/')
# telling our app where the database is located
# three slashes is a relative path, four is absolute
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class Survey(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    content = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"<message={self.content}>"


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.route('/hello', methods=['POST'])
def index():
    message = request.get_json()

    print('***********', message)
    new_message = Survey(content=message)

    try:
        db.session.add(new_message)
        db.session.commit()
        return jsonify("success")
    except:
        return jsonify("there was an issue adding a message")


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    db.create_all()
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))
