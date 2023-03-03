const router = require('express').Router();
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    res.status(200).json(themes);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
