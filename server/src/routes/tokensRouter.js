const express = require('express');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');

const tokensRouter = express.Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
  try {
    const { user } = res.locals; 

    const { accessToken, refreshToken } = generateTokens({ user });

    res.cookie('refreshToken', refreshToken, cookieConfig);
    res.json({ accessToken, user });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error }); 
  }
});

module.exports = tokensRouter;

