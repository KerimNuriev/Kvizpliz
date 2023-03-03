const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.get('/sign-in', async (req, res) => {
  const id = req.session.userId;
  if (id) {
    const user = await User.findOne({ where: { id } });
    res.json({ message: 'Hi', user });
  } else {
    res.json({ message: 'no', user: '' });
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      let user = await User.findOne({ where: { name } });
      if (user && (await bcrypt.compare(password, user.password))) {
        user = {
          id: user.id,
          name: user.name,
          score: user.score,
        };
        req.session.userId = user.id;
        res.status(201).json({ message: '', user });
      } else {
        res
          .status(403)
          .json({ message: 'Неверный name или пароль', user: {} });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля', user: {} });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/sign-up', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (name && password) {
      let user = await User.findOne({ where: { name } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          password: hash,
          score: 0,
        });
        user = {
          id: newUser.id,
          name: newUser.name,
        };
        req.session.userId = user.id;
        res.status(201).json({ message: '', user });
      } else {
        res
          .status(403)
          .json({ message: 'Такой name уже существует', user: {} });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля', user: {} });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;
