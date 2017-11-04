var express = require('express')
var bodyParser = require('body-parser')
var passport = require('passport')
var WebTwitterStrategy = require('passport-twitter').Strategy;
var AppTwitterStrategy = require('passport-twitter-token');
var session = require('express-session')
var app = express()

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRETKEY!$!@#!@#%!@^%^#&^%^&)^&)^$%^&#$%^!@#$%!!@#$!'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((obj, done)=>{
    done(null, obj);
});


app.listen(3000, ()=>{
    console.log('Server Running')
})

require('./routes/WebTwitter')(app, passport, WebTwitterStrategy)
require('./routes/AppTwitter')(app, passport, AppTwitterStrategy)