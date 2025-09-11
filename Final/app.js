var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require ("./db");
const Supporter = require("./models/Supporter");

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
async function setup(){
  await Supporter.create({
    first_n: "bill",
    last_n: "Roger",
    gender: "Male",
    age: "23",
    ides: "Visual Studio Code",
    fpl: "Python",
    muf: "React",
    vc: "Git",

  })
  await Supporter.create({
    first_n: "sarah",
    last_n: "linnay",
    gender: "Female",
    age: "22",
    ides: "Visual Studio Code",
    fpl: "Python",
    muf: "React",
    vc: "Git",

  })
  await Supporter.create({
    first_n: "Debrah",
    last_n: "Kinnaway",
    gender: "Male",
    age: "23",
    ides: "Visual Studio Code",
    fpl: "Python",
    muf: "React",
    vc: "Git",
  })
}
// route to take it too /submit and or /result 
// the /submit url runs though and redirects to the index page
sequelize.sync({ force: true }).then(()=>{
  console.log("Sequelize Sync Completed...");
  setup().then(()=> console.log("User setup complete"))
})

module.exports = app;
