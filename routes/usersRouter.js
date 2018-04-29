const { Router } = require('express');
const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  res.send('This is the list of all users');
});
usersRouter.get('/:userId', (req, res) => {
  res.send(`This is the user ${req.params.userId} `);
});
usersRouter.put('/:userId', (req, res) => {
  res.send(`This is the edition of user ${req.params.userId} with the data ${req.body} `);
});
usersRouter.post('/', (req, res) => {
  res.send(`Create a new user with the data ${req.body}`);
});
usersRouter.delete('/:userId', (req, res) => {
  res.send(`User ${req.params.userId} was deleted `);
});

module.exports = usersRouter;
