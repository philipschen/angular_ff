var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = 5000;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var generate_uid = require('./routes/generate_uid');
var app = express();
var mongoose = require('mongoose');

//Map global promise - get rid of warining

mongoose.Promise = global.Promise;

//connect to mongoose
mongoose.connect('mongodb://localhost/angularff', {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//load register_pro model
require('./models/register_pro');
var register_pro = mongoose.model('register_pro');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/generate_uid.js', generate_uid);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

module.exports = app;
