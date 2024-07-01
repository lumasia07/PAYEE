from sqlalchemy import Column, DateTime, Integer, String, Float, ForeignKey
from .user import Base
from sqlalchemy.orm import relationship
import datetime

class Wallet(Base):
    __tablename__ = 'wallets'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    categories = relationship('Category', back_populates='wallet', cascade='all, delete-orphan')

    def __repr__(self):
        return f"<Wallet(name={self.name})>"

class Category(Base):
    __tablename__ = 'categories'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    amount = Column(Float, nullable=False)
    wallet_id = Column(Integer, ForeignKey('wallets.id'), nullable=False)
    wallet = relationship('Wallet', back_populates='categories')
    created_at = Column(DateTime, default=lambda: datetime.datetime.now(datetime.timezone.utc))

    

    def __repr__(self):
        return f"<Category(name={self.name}, amount={self.amount})>"