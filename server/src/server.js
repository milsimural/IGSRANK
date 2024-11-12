const app = require('./app');
require('dotenv').config();

// const PORT = process.env.PORT || 3000;
const { APP_PORT, APP_IP} = process.env;


app.listen(APP_PORT, APP_IP, () => {
  console.log(`Server started on http://${APP_IP}:${APP_PORT}`);
});
