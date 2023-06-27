var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//var indexRouter = require('./index');
//var usersRouter = require('./users');
var sensorRouter = require('./ConnBDD');
const authRoutes = require('./authRoutes');
const Profil = require('./Profil');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/sensors', sensorRouter);
app.use('/auth', authRoutes);

const mongoDataRoutesTeacher = require('./teacherRoute');
app.use('/api/mongoDataTeacher', mongoDataRoutesTeacher);

const mongoDataRoutesStudent = require('./studentRoute');
app.use('/api/mongoDataStudent', mongoDataRoutesStudent);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/modif', Profil)
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

const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb(null, '../image' )
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage : storage})

app.post('/upload', upload.single('image'), (req, res) => {
  res.send("Image Uploaded");
})

module.exports = app;