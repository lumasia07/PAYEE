from flask import request
from flask_restful import Resource
from models import db, User

class UserRes(Resource):
    def get(self):
        users = User.query.all()
        return [{'id': user.user_id, 'username':user.username, 'email': user.email} for user in users]
    
    def post(self):
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'])
        db.session.add(new_user)
        db.session.commit()
        return {'id': new_user.user_id, 'username': new_user.username, 'email': new_user.email}, 201