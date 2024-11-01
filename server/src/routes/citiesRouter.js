const { Router } = require('express');
const { Ekaterinburg } = require('../../db/models');

const cityRouter = Router();

cityRouter.get('/all', async (req, res) => {
  const cities = await Ekaterinburg.findAll();
  res.json(cities);
});

module.exports = cityRouter;
