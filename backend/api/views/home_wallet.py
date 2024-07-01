from flask import Blueprint, jsonify, request
from storage_engine.Database import db_storage
from storage_engine.data_models.wallet import Wallet, Category

wallet_storage = db_storage()

user_home_wallet = Blueprint('home_wallet', __name__)

@user_home_wallet.route('/api/my_home_wallet', methods=['POST'])
def create_wallet():
    data = request.get_json()
    wallet_name = data.get('wallet_name')
    categories_data = data.get('categories', [])

    wallet = Wallet(name=wallet_name)
    for category_data in categories_data:
        category = Category(name=category_data['name'], amount=category_data['amount'])
        wallet.categories.append(category)
    
    try:
        wallet_storage.add_objects(wallet)
        return jsonify({'message': 'Wallet created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@user_home_wallet.route('/api/my_home_wallet', methods=['GET'])
def get_home_wallet_data():
    try:
        wallets = wallet_storage.get_all(Wallet)
        result = []
        for wallet in wallets:
            wallet_data = {
                'id': wallet.id,
                'name': wallet.name,
                'categories': [{'name': category.name, 'amount': category.amount} for category in wallet.categories]
            }
            result.append(wallet_data)
        
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
