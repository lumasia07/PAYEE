""""Creates MySQL Storage engine"""
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
                   MYSQL_DB),
                   pool_pre_ping=True # Manage connection drops
        )
        """Configures Database session"""
        session_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
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
        try:
            session = self.get_session()
            session.add(obj)
            session.commit()
        except Exception as failed_add:
            session.rollback()
            raise failed_add 

    def delete_objects(self, obj):
        """Deletes an object from the current session"""
        try:
            session = self.get_session()
            session.add(obj)
            session.commit()
        except Exception as failed_delete:
            session.rollback()
            raise failed_delete

    def get_all(self, cls):
        """Get all objects of a class"""
        if cls not in classes:
            raise ValueError("{} is not a registered class!".format(cls))
        
        session = self.get_session()
        reg_class = classes[cls]
        return session.query(reg_class).all()
    
    def reload(self):
        """Reloads all objects of a class"""
        try:    
            session = self.get_session()
            for key, value in classes.items():
                current_objs = session.query(value).all()
                print("Reloaded {} objects of class {}".format(len(current_objs), key))
        except Exception as failed_reload:
            print("Failed to reload objects!!")
            raise failed_reload
        
if __name__ == "__main__":
    storage = db_storage()
    storage.reload()
    storage.close_session()