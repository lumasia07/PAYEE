from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .user import Base
import datetime
from uuid import uuid4

class Spend(Base):
    """Stores User spend in realtime"""
    __tablename__ = 'user_spend'

    spend_id = Column(String(128), primary_key=True, default=lambda: str(uuid4()), unique=True, nullable=False)
    user_id = Column(Integer, ForeignKey('reg_users.user_id'), nullable=False)
    amount = Column(Float, nullable=False)
    category = Column(String(128), nullable=False)
    date = Column(DateTime, default=datetime.datetime.timestamp, nullable=False)

    user = relationship('User', back_populates='spends')

    def __init__(self, user_id, amount, category, spend_id):
        self.user_id = user_id
        self.amount = amount
        self.category = category
        self.spend_id = spend_id

    def __repr__(self):
        return f"<Spend(spend_id='{self.spend_id}', user_id='{self.user_id}', amount='{self.amount}', category='{self.category}', date='{self.date}')>"
