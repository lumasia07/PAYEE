"""Register Blueprints"""
from .api import api_bp
from .user import user_bp

def register_views(app):
    app.register_blueprint(api_bp)
    app.register_blueprint(user_bp)
