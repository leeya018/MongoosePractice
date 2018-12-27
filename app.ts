import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import { User } from './models/User'
import shipRouter from './routers/ships'
import carRouter from './routers/cars'
import userRouter from './routers/users'
var passport = require('passport')

let LocalStrategy = require('passport-local').Strategy;

let url = 'mongodb://localhost:27017/Dating'
mongoose.connect(url, { useNewUrlParser: true })

let app = express()

let jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err:any, user:any, info:any) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
    //   req.logIn(user, function(err) {
    //     if (err) { return next(err); }
    //     return res.redirect('/users/' + user.username);
    //   });
    })(req, res, next);
  });
app.use('/ships', shipRouter)
app.use('/cars', carRouter)
app.use('/users', userRouter)




app.listen(3000)