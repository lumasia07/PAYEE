from flask import Blueprint, jsonify, request
from storage_engine.Database import db_storage
from storage_engine.data_models.user import User

user_storage = db_storage()

user_bp = Blueprint('user', __name__)

@user_bp.route('/api/register', methods=['GET'])
def get_user_details():
    users = user_storage.get_all(User)  # Pass the User class as argument
    reg_users_list = [{'user_id': user.user_id,
                       'first_name': user.first_name,
                       'last_name': user.last_name,
                       'email': user.email} for user in users]
    return jsonify(reg_users_list)

@user_bp.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    
    if not data:
        return jsonify({'message': 'Missing JSON in request'}), 400

    required_fields = ['first_name', 'last_name', 'email', 'first_password', 'confirm_password']
    
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({'message': 'Missing fields: ' + ', '.join(missing_fields)}), 400

    if data['first_password'] != data['confirm_password']:
        return jsonify({'message': 'Passwords do not match!'}), 400
    
    existing_user = user_storage.get_all(User, {'email': data['email']})
    if existing_user:
         return jsonify({'message': 'Email already registered!'}), 400
    
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        password=data['first_password']
    )
    
    user_storage.add_objects(new_user)
    
    return jsonify({'message': 'User registered successfully!'}), 201