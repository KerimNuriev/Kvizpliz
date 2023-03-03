const router = require('express').Router();
const bcrypt = require('bcrypt');
const FormLog = require('../../views/FormLog');
const FormReg = require('../../views/FormReg');
const { User } = require('../../db/models');

router
  .route('/auth')
  .get((req, res) => {
    res.renderComponent(FormLog, {});
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const candidate = await User.findOne({
          where: { email },
          raw: true,
        });

        if (candidate) {
          if (
            candidate &&
            (await bcrypt.compare(password, candidate.password))
          ) {
            req.session.userId = candidate.id;
            res.json({ message: 'true' });
          } else {
            res.status(400).json({ message: 'Неправильный пароль или логин' });
          }
        } else {
          res.status(400).json({ message: 'Неправильный пароль или логин' });
        }
      } else {
        res.status(400).json({ message: 'Введите логин и пароль' });
      }
    } catch ({ message }) {
      res.status(500).json(message);
    }
  });

router
  .route('/registration')
  .get((req, res) => {
    res.renderComponent(FormReg, {});
  })
  .post(async (req, res) => {
    try {
      const { email, password, name } = req.body;
      console.log(req.body);

      if (email && password && name) {
        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
          res.status(400).json({ message: 'Заняяяяято!', created: false });
        } else {
          const hashPassword = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            email,
            password: hashPassword,
            name,
            score: 0,
          });
          user = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          };
          req.session.userId = newUser.id;
          res.status(201).json({ data: newUser, message: 'true' });
        }
      } else {
        res.status(400).json({ message: 'Ты кого хочешь обмануть, пес?' });
      }
      
    } catch ({ error }) {
      console.log(error);
    }
  });

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.locals.user = null;
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
