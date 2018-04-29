const { Router } = require('express');
const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  res.send('This is the list of all products');
});
productsRouter.get('/:productId', (req, res) => {
  res.send(`This is the product ${req.params.productId} `);
});
productsRouter.put('/:productId', (req, res) => {
  res.send(`This is the edition of product ${req.params.productId} with the data ${req.body} `);
});
productsRouter.post('/', (req, res) => {
  res.send(`Create a new product with the data ${req.body}`);
});
productsRouter.delete('/:productId', (req, res) => {
  res.send(`Product ${req.params.productId} was deleted `);
});

module.exports = productsRouter;
