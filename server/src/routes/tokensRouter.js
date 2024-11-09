const express = require('express');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');

const tokensRouter = express.Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
  try {
    const { user } = res.locals; // Получаем пользователя из локальных переменных ответа

    // Генерируем новые токены
    const { accessToken, refreshToken } = generateTokens({ user });

    // Устанавливаем refreshToken в куки и отправляем ответ
    res.cookie('refreshToken', refreshToken, cookieConfig);
    res.json({ accessToken, user });
  } catch (error) {
    console.error('Error refreshing tokens:', error); // Логируем ошибку в консоль
    res.status(500).json({ message: 'Internal Server Error' }); // Возвращаем статус 500 с сообщением об ошибке
  }
});

module.exports = tokensRouter;

