"""API gateway"""
from storage_engine.Database import storage
from flask import Flask
from flask_cors import CORS
from views.__init__ import payee_views

app = Flask(__name__)
CORS(app)
app.register_blueprint(payee_views)

@app.teardown_appcontext
def close_db(error):
    """Closes storage"""
    storage.close()

@app.errorhandler
def page_not_found(error):
    return 'This page does not exist', 404

if __name__ == "__main__":
    app.run(debug=True, port=5001)