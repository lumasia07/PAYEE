from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """Defines a class User which is the base model for users"""
    user_id = db.Column(db.Integer, primary_key=True)
    first_username = db.Column(db.String(80), unique=True, nullable=False)
    second_username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        """Representation of user model"""
        return '<User {} {}>'.format(self.first_username, self.second_username)
