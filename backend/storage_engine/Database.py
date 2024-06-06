""""Creates MySQL Storage engine"""
import sqlalchemy
from os import getenv
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

classes = {"""Include all Data models for Payee"""}

class db_storage:
    """"Abstraction for Payee Storage Engine"""

    __engine = None
    __session = None

    def __init__(self):
        """"Creates an Instance of the class object(db_storage)"""
        MYSQL_USER = getenv('PAYEE_USER')
        MYSQL_PWD = getenv('PAYEE_PWD')
        MYSQL_HOST = getenv('PAYEE_HOST')
        MYSQL_DB = getenv('PAYEE_DB')

        self.__engine = create_engine(
            'mysql+mysqldb://{}:{}@{}/{}'.
            format(MYSQL_USER,
                   MYSQL_PWD,
                   MYSQL_HOST,
                   MYSQL_DB)
        )
        """"Configures Database session"""
        session_factory = sessionmaker(bind=self.__engine)
        self.__session = scoped_session(session_factory)
        
        """Creates tables for all registered models in classes dict"""
        Base.metadata.create_all(self.__engine)

    def get_session(self):
        """Returns current Database session"""
        return self.__session
    
    def close_session(self):
        """Closes current Database session"""
        self.__session.remove()

    def add_objects(self, obj):
        """Adds an object to the current session"""
        session = self.get_session()
        session.add(obj)
        session.commit()

    def delete_objects(self, obj):
        """Deletes an object from the current session"""
        session = self.get_session()
        session.add(obj)
        session.commit()

    def get_all(self, cls):
        """Get all objects of a class"""
        if cls not in classes:
            raise ValueError("{} is not a registered class!".format(cls))
        
        session = self.get_session()
        reg_class = classes[cls]
        return session.query(reg_class).all()