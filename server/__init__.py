from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
import os
from flask_cors import CORS
from .commands import create_tables

from .model import db, Messages, Spending, Lifecycle, Landfill


def create_app(config_file="settings.py"):
    app = Flask(__name__, static_folder='../build', static_url_path='/')
    CORS(app)

    app.config.from_pyfile(config_file)
    db.init_app(app)

    app.cli.add_command(create_tables)

    @app.route('/', methods=['GET'])
    def home():
        return app.send_static_file('index.html')

    @app.route('/hello', methods=['POST'])
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

    @app.route('/spending', methods=['POST'])
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

    @app.route('/lifecycle', methods=['POST'])
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

    @app.route('/landfill', methods=['POST'])
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

    @app.errorhandler(404)
    def not_found(e):
        return app.send_static_file('index.html')

    return app
