const router = require('express').Router();
const { Song, User } = require('../../db/models');
const Home = require('../../views/Home');

router.route('/home').get(async (req, res) => {
  const arr = await Song.findAll({
    where: { user_id: req.session.userId },
    include: [User],
    raw: true,
  });
  const { user } = res.locals;
  res.renderComponent(Home, { authUser: user, arr });
});

module.exports = router;
