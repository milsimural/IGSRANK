require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DB_CONNECTION_STRING',
  },
  production: {
    use_env_variable: 'DB_CONNECTION_STRING',
  },
};
