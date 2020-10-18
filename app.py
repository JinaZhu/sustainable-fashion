from flask import Flask
# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return 'hello world'


if __name__ == "__main__":
    app.run(debug=True)
