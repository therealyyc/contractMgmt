var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
const contractRouter = require('./routes/contracts')
const loginRouter = require('./routes/login')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//设置html引擎
app.engine('html', ejs.__express);
//设置视图引擎
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// need to be resolved
app.use(express.static(path.join(__dirname, 'public/react-component/dist')));

app.use('/', indexRouter);
app.use('/api/login', loginRouter)
app.use('/api/contract', contractRouter)


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
