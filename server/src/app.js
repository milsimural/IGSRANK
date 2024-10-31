const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use((morgan('dev')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/tokens', require('./routes/tokensRouter'));
app.use('/api/admin', require('./routes/adminRouter'));
app.use('/api/cities', require('./routes/citiesRouter'));

module.exports = app;