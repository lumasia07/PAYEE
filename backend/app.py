from flask import Flask, send_from_directory
from api.views import register_views
from storage_engine.Database import db_storage
from flask_cors import CORS


app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)
storage_app = db_storage()

register_views(app)

@app.teardown_appcontext
def close_db(error):
    storage_app.close_session()

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path.startswith('api/'):
        return "API route", 404
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
