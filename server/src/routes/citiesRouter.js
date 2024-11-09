const { Router } = require('express');
const { Ekaterinburg } = require('../../db/models');

const cityRouter = Router();

cityRouter.get('/all', async (req, res) => {
  try {
    const cities = await Ekaterinburg.findAll();
    res.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error); // Логируем ошибку в консоль
    res.status(500).json({ message: 'Server error while fetching cities' }); // Возвращаем статус 500 с сообщением об ошибке
  }
});

module.exports = cityRouter;

