from flask import Blueprint, jsonify

user_bgt = Blueprint('budget', __name__)

@user_bgt.route('/api/dashboard/budget', methods=['GET'])
def get_user_budget():
    budget_data = {
        'total_budget': 30000,
        'categories': [
            {'name': 'Food', 'amount': 8000},
            {'name': 'Rent', 'amount': 12000},
            {'name': 'Utilities', 'amount': 4000},
            {'name': 'Entertainment', 'amount': 3000},
            {'name': 'Miscellaneous', 'amount': 3000}
        ]
    }
    return jsonify(budget_data)