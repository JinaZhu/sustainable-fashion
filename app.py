from flask import Flask
# from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__, static_folder='./client/build', static_url_path='/')


@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(debug=True)
