from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Messages(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    content = db.Column(db.String(200), nullable=False)

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
    Lifecycle_year = db.Column(db.String, nullable=False)
    votes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Lifecycle_year={self.Lifecycle_year}>"


def connect_to_db(app, db_uri='postgresql:///survey'):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['SQLALCHEMY_ECHO'] = False

    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from app import app
    connect_to_db(app)
