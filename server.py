from fastapi import FastAPI
from fastapi.logger import logger
from typing import Union
from pydantic import BaseSettings
from util import DataGatherer

class Settings(BaseSettings):
    BASE_URL = 'http://localhost:8000'

settings = Settings()
app = FastAPI()

@app.get('/{item_count}')
def get(item_count: int, q: Union[str, None] = None):
    result = []
    products = DataGatherer.fetch()
    for i in range(0, item_count):
        result.append(products[i])
    result.append({"code": DataGatherer.code(item_count)})
    return result
