"""Register Blueprints"""
from .api import api_bp
from .user import user_bp
from .user_expenditure import user_bdgt
from .user_budget import user_bgt

def register_views(app):
    app.register_blueprint(api_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(user_bdgt)
    app.register_blueprint(user_bgt)
