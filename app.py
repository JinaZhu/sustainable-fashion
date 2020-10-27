from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
import os
from model import db, connect_to_db, Messages, Spending, Lifecycle
from flask_cors import CORS

app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


@app.route('/hello', methods=['POST'])
def index():
    message = request.get_json()
    print('********', message)
    new_message = Messages(content=message)
    print(new_message)

    try:
        print('*******', 'hi')
        db.session.add(new_message)
        print('hi2')
        db.session.commit()
        print('hi3')
        first_message = Messages.query.filter_by(id=1).first()
        print('first_message', first_message)
        return jsonify(first_message.content)
    except:
        return jsonify("there was an issue adding a message")


@app.route('/spending', methods=['POST'])
def spending():
    spending_amount = request.get_json()
    print('spending_amount', spending_amount)
    exist = Spending.query.filter_by(spendingAmount=spending_amount).scalar()
    print('exist', exist)
    try:
        if exist == None:
            new_spending_amount = Spending(
                spendingAmount=spending_amount, votes=1)
            print('new_spending_amount', new_spending_amount)
            db.session.add(new_spending_amount)
            db.session.commit()
        else:
            spending = Spending.query.filter_by(
                spendingAmount=spending_amount).first()
            print('spending', spending)
            spending.votes += 1
            db.session.commit()
        return jsonify('yayyy')
    except:
        print('in except************')
        return jsonify("Something went wrong, could not add to db")


@app.route('/lifecycle', methods=['POST'])
def lifecycle():
    year = request.get_json()
    print('***********', year)
    exist = Lifecycle.query.filter_by(lifecycle_year=year).scalar()
    print("^^^^^^^^", exist)

    try:
        if exist == None:
            new_lifecycle_year = Lifecycle(
                lifecycle_year=year, votes=1)
            db.session.add(new_lifecycle_year)
            db.session.commit()
        else:
            update_lifecycle_year = Lifecycle.query.filter_by(
                lifecycle_year=year).first()
            update_lifecycle_year.votes += 1
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
