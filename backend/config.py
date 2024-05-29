import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://stan:lumasia003@localhost/Payee_Users'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.urandom(24)