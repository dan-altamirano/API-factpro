var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var compraRouter = require('./routes/compra');
var facturaRouter = require('./routes/factura');
var productoRouter = require('./routes/producto');
var inventarioRouter = require('./routes/inventario');
var stockRouter = require('./routes/stock');
var paymentRouter = require('./routes/payment');
var userRouter = require('./routes/usuario');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors())

app.use('/', indexRouter);
app.use('/compra', compraRouter);
app.use('/factura', facturaRouter);
app.use('/producto', productoRouter);
app.use('/inventario', inventarioRouter);
app.use('/stock', stockRouter);
app.use('/pagos', paymentRouter);
app.use('/usuario', userRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
