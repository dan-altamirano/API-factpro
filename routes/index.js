const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');

// Use bodyParser middleware
productsRouter.use(bodyParser.urlencoded({ extended: false}));
productsRouter.use(bodyParser.json());

router.get('/', (req, res) => res.send('This is the home'));
router.use('/users', usersRouter);
router.use('/products', productsRouter);



module.exports = router;
