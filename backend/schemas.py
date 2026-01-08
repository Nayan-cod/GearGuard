from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ItemBase(BaseModel):
    title: str
    description: str


class ItemCreate(ItemBase):
    pass


class ItemResponse(ItemBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

