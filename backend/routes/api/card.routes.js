const router = require('express').Router();

const { Todo } = require('../../db/models');

router
  .route('/card')
  // read
  .get((req, res) => {
    // const { user } = res.locals;
    Todo.findAll({ raw: true })
      .then((allTodos) => res.json(allTodos))
      .catch((err) => res.json({ err: err.message }));
  })

  // create
  .post(async (req, res) => {
    try {
      const { name, status } = req.body;
      console.log(name, status);
      if (name) {
        const newTodo = await Todo.create({
          name,
          status,
        });
        console.log(newTodo);
        if (newTodo) {
          const newTodo2 = await Todo.findOne({
            where: { id: newTodo.id },
            raw: true,
          });
          res.status(201).json(newTodo2);
        } else {
          res.status(404).json({ error: 'error.message' });
        }
      } else {
        res.status(404).json({ error: 'ты кого хочешь обмануть)))))' });
      }
    } catch ({ error }) {
      console.log(error);
    }
  });

router
  .route('/card/:id')

  // update
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, status } = req.body;
      console.log(name, status);

      if (name) {
        const updatedTodo = await Todo.update(
          { name, status },
          {
            where: { id },
            raw: true,
            returning: true,
          }
        );

        const data = await Todo.findOne({ where: { id } });

        if (data) {
          res.json(data);
        } else res.json({ message: 'Введите данные корректно' });
      } else {
        res.json({ message: 'Введите данные' });
      }
    } catch ({ error }) {
      console.log(error);
    }
  })

  //   // delete
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);

      const deletedTodo = await Todo.destroy({
        where: { id },
      });
      if (deletedTodo) {
        res.status(200).json(id);
      } else res.status(400).json({ deleted: false, id });
    } catch ({ error }) {
      console.log(error);
    }
  });

module.exports = router;
