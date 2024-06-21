from flask import Blueprint, jsonify

user_bdgt = Blueprint('user_bdgt', __name__)

@user_bdgt.route('/api/dashboard/expenditure', methods=['GET'])
def get_user_expenditure():
    categories = [
        {'name': 'Food', 'amount': 6000},
        {'name': 'Rent', 'amount': 12000},
        {'name': 'Utilities', 'amount': 1500},
        {'name': 'Entertainment', 'amount': 1500},
        {'name': 'Miscellaneous', 'amount': 2000}
    ]
    total_spend = sum(category['amount'] for category in categories)
    expenditure_data = {
        'total_spend': total_spend,
        'categories': categories
    }
    return jsonify(expenditure_data)


