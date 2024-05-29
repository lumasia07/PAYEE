from flask import request
from flask_restful import Resource
from models import db, User

class UserRes(Resource):
    def get(self):
        users = User.query.all()
        return [
            {
                'user_id': user.user_id,
                'first_username': user.first_username,
                'second_username': user.second_username,
                'email': user.email
            } for user in users
        ]

    
    def post(self):
        data = request.get_json()
        new_user = User(first_username=data['first_username'], second_username=data['second_username'], email=data['email'])
        db.session.add(new_user)
        db.session.commit()
        return {'id': new_user.user_id, 'first_username': new_user.first_username, 'second_username': new_user.second_username, 'email': new_user.email}, 201