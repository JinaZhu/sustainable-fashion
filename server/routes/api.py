from flask import Blueprint, jsonify, request
from flask_cors import CORS

from ..model import db, Messages, Spending, Lifecycle, Landfill

api = Blueprint('api', __name__)

CORS(api)


@api.route('/api/hello', methods=['POST'])
def index():
    message = request.get_json()
    new_message = Messages(content=message)
    print(new_message)

    try:
        db.session.add(new_message)
        db.session.commit()
        first_message = Messages.query.filter_by(content=message).first()
        return jsonify(first_message.content)
    except:
        return jsonify("there was an issue adding a message")


@api.route('/api/spending', methods=['POST'])
def spending():
    spending_amount = request.get_json()
    exist = Spending.query.filter_by(
        spendingAmount=spending_amount).scalar()
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


@api.route('/api/lifecycle', methods=['POST'])
def lifecycle():
    year = request.get_json()
    print(year)
    exist = Lifecycle.query.filter_by(lifecycle_year=year).scalar()

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


@api.route('/api/landfill', methods=['POST'])
def landfill():

    landfill_percentage = request.get_json()
    landfill_percentage_int = int(landfill_percentage)
    if landfill_percentage_int > 100:
        return jsonify({'error': "Invalid input"}), 400

    print(landfill_percentage_int)

    exist = Landfill.query.filter_by(
        landfill_percentage=landfill_percentage_int).scalar()

    try:
        if exist == None:
            new_landfill_percentage = Landfill(
                landfill_percentage=landfill_percentage_int, votes=1)
            db.session.add(new_landfill_percentage)
            db.session.commit()
        else:
            update_landfill_votes = Landfill.query.filter_by(
                landfill_percentage=landfill_percentage_int).first()
            update_landfill_votes.votes += 1
            db.session.commit()
        return jsonify('Yayy'), 200
    except:
        return jsonify({'error': "Unable to retrieve data"}), 500
