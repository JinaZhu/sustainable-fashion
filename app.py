from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
import os
from model import db, connect_to_db, Messages, Spending, Lifecycle
from flask_cors import CORS


# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__, static_folder='./build', static_url_path='/')
# telling our app where the database is located
# three slashes is a relative path, four is absolute
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# db = SQLAlchemy(app)
CORS(app)


# class Survey(db.Model):
#     id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     content = db.Column(db.String(200), nullable=False)

#     def __repr__(self):
#         return f"<message={self.content}>"


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.route('/hello', methods=['POST'])
def index():
    message = request.get_json()
    new_message = Messages(content=message)

    try:
        db.session.add(new_message)
        db.session.commit()
        first_message = Messages.query.filter_by(id=1).first()
        return jsonify(first_message.content)
    except:
        return jsonify("there was an issue adding a message")


@app.route('/spending', methods=['POST'])
def spending():
    spending_amount = request.get_json()
    exist = Spending.query.filter_by(spendingAmount=spending_amount).scalar()

    try:
        if exist == None:
            new_spending_amount = Spending(
                spendingAmount=spending_amount, votes=1)
            db.session.add(new_spending_amount)
            db.session.commit()
        else:
            spending = Spending.query.filter_by(
                spendingAmount=spending_amount).first()
            spending.votes += 1
            db.session.commit()
        return jsonify('yayyy')
    except:
        return jsonify("Something went wrong, could not add to db")


@app.route('/lifecycle', methods=['POST'])
def lifecycle():
    lifecycle_year = request.get_json()
    exist = Lifecycle.query.filter_by(Lifecycle_year=Lifecycle_year).scalar()

    try:
        if exist == None:
            new_lifecycle_year = Lifecycle(
                Lifecycle_year=Lifecycle_year, votes=1)
            db.session.add(new_lifecycle_year)
            db.session.commit()
        else:
            lifecycle_year = Lifecycle.query.filter_by(
                Lifecycle_year=Lifecycle_year).first()
            lifecycle_year.votes += 1
            db.session.commit()
        return jsonify('yayyy')
    except:
        return jsonify("Something went wrong, could not add to db")


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))
