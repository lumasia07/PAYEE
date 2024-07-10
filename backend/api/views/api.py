"""Test API"""
from flask import Blueprint, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from the API!"})
