from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Survey(db.Model):
    __tablename__ = 'survey'

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    content = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"<message={self.content}>"


def connect_to_db(app, db_uri='sqlite:///survey'):
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['SQLALCHEMY_ECHO'] = False

    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from app import app
    connect_to_db(app)
    db.create_all()
