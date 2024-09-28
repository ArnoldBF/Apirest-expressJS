const { Router } = require('express');
const productsRouter = require('./productsRouter');
const express = require('express');

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
}

module.exports = {
  routerApi,
};
