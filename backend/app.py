from flask import Flask
from flask_restful import Api
from config import Config
from models import db
from resources.user import UserRes

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
api = Api(app)

api.add_resource(UserRes, '/users')

if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
    app.run(debug=True)
