require('dotenv').config();

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL"
  },
  "production": {
    "username": "DBUSER",
    "password": "DBPASS",
    "database": "DBNAME",
    "host": "DBHOST",
    "dialect": "postgres"
  }
}