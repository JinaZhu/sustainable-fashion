from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Messages(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    content = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<message={self.content}>"


class Spending(db.Model):
    __tablename__ = "spending"

    spending_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    spendingAmount = db.Column(db.String, nullable=False)
    votes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<spendingAmount={self.spendingAmount}>"


class Lifecycle(db.Model):
    __tablename__ = "lifecycle"

    lifecycle_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    lifecycle_year = db.Column(db.Integer, nullable=False)
    votes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Lifecycle_year={self.lifecycle_year}>"

# telling our app where the database is located
# three slashes is a relative path, four is absolute


def connect_to_db(app, config_file='settings.py'):
    app.config.from_pyfile(config_file)

    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from app import app
    connect_to_db(app)
