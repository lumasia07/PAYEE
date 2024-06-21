from flask import Blueprint, jsonify, request

user_bdgt = Blueprint('expend', __name__)

@user_bdgt.route('/api/dashboard/expenditure', methods=['GET'])
def get_user_expenditure():
    expenditure_data = {
        'total_spend': 19000,
        'categories': [
            {'name': 'Food', 'amount': 6000},
            {'name': 'Rent', 'amount': 12000},
            {'name': 'Utilities', 'amount': 1500},
            {'name': 'Entertainment', 'amount': 1500},
            {'name': 'Miscellaneous', 'amount': 2000}
        ]
    }
    return jsonify(expenditure_data)