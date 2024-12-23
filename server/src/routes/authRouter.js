const { Router } = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { User } = require('../../db/models');

const authRouter = Router();
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');

authRouter.post('/signup', async (req, res) => {
  const { name, password, email } = req.body;
  const hashpass = await bcrypt.hash(password, 10);

  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, password: hashpass, money: 10000 },
  });
  if (!created) {
    return res.status(400).json({ message: 'Такие учетные данные уже используются' });
  }

  const user = newUser.get();
  delete user.password;
  const { refreshToken, accessToken } = generateTokens({ user });
  res
    .status(200)
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ user, accessToken });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const targetUser = await User.findOne({ where: { email } });
  if (!targetUser) {
    return res.status(400).json({ text: 'Неверные учетные данные' });
  }
  const isValid = await bcrypt.compare(password, targetUser.password);
  if (!isValid) {
    return res.status(400).json({ text: 'Неверные учетные данные' });
  }

  const user = targetUser.get();
  delete user.password;
  const { refreshToken, accessToken } = generateTokens({ user });
  res
    .status(200)
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ user, accessToken });
});

authRouter.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').status(200).send('Вы успешно вышли');
});

authRouter.get('/money/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    if (!user.money) {
      return res.status(404).send({ error: 'User money not found' });
    }
    return res.json(user.money);
  } catch (error) {
    console.error('Error fetching user money:', error);
    return res.status(500).send(error.message);
  }
});

authRouter.patch('/money/:userId/:moneyAmmount', async (req, res) => {
  const { userId, moneyAmmount } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    user.money += parseInt(moneyAmmount);
    await user.save();
    return res.json(user.money);
  } catch (error) {
    console.error('Error updating user money:', error);
    return res.status(500).send(error.message);
  }
});

// authRouter.post('/audit', async (req, res) => {
//   try {
//     const { site, phone } = req.body;
//     res.status(200).send(`Данные отправлены успешно! ${site} ${phone}`);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

authRouter.post('/audit', async (req, res) => {
  try {
    const { site, phone, email } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Новый запрос на аудит',
      text: `Данные отправлены успешно!\nСайт: ${site}\nТелефон: ${phone}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send(`Email успешно отправлен! ${site} ${phone}`);
  } catch (error) {
    res.status(500).send(`Ошибка при отправке email: ${error.message}`);
  }
});

module.exports = authRouter;
