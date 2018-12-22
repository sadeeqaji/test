const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');


const app = express();

// importing db configurations
const dbconfig = require('./config/dbconfig');


// importing routes
const user = require('./routes/user');
const payment = require('./routes/payment');
const file = require('./routes/files');
const upload = require('./routes/upload');

//passport config
require('./config/passport')(passport);

//mongodb connection
mongoose.connect(dbconfig.dburl, {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then(() => console.log('DB is up and running'))
    .catch((err) => console.log(err))




//body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

///Express session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        maxAge: null
    }
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//CORS middleware
app.use(cors());

//flash middleware
app.use(flash());

//Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_mgs');
    res.locals.error_msg = req.flash('error_mgs');
    res.locals.user = req.user || null;
    next();

});


//routes
app.use('/user', user)
app.use('/upload', upload)
app.use('/files', file)


//server
app.listen(dbconfig.port, () => console.log(`running on port ${dbconfig.port}`))
