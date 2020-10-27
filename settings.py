import os
from dotenv import load_dotenv
from pathlib import Path

env_path = Path(".")/'.env'
load_dotenv(dotenv_path=env_path)

SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
print(SQLALCHEMY_DATABASE_URI)
# SQLALCHEMY_TRACK_MODIFICATIONS = False
# SQLALCHEMY_ECHO = False
