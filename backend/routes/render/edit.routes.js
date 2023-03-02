const router = require('express').Router();
const Edit = require('../../views/Edit');
const { Song } = require('../../db/models');

router.route('/edit/:id').get(async (req, res) => {
  const { id } = req.params;
  const card = await Song.findOne({ where: { id } });
  res.renderComponent(Edit, { card });
});

module.exports = router;
