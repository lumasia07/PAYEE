from flask import Blueprint, jsonify, request

user_bdgt = Blueprint('budget', __name__)

@user_bdgt.route('/api/dashboard/expenditure', methods=['GET'])
def get_data():
    data = {
        'labels': ['Food', 'Rent', 'Pay-TV'],
        'datasets': [{
            'data': [300, 50, 100],
            'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56'],
            'hoverBackgroundColor': ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
    return jsonify(data)