require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const key = process.env.JWT_SECRET_KEY

function signIn (req, res) {
  User.findOne({username: req.body.username})
  .then(userSignIn => {
    console.log('masuk sini kagak?')
    if (bcrypt.compareSync(req.body.password, userSignIn.password)) {
      let token = jwt.sign({
        id : userSignIn._id,
        name : userSignIn.name,
        username : userSignIn.username
      }, key)
      let sendToken = ({token: token, message: 'user has been sign in'})
      console.log('dapet token')
      res.status(200).send(sendToken)
    } else {
      console.log('salah password')
      res.status(400).send({message: 'password not recognize'})
    }
  })
  .catch(err => {
    console.log('belum register')
    res.status(400).send({message: 'please sign up heula'})
  })
}

function signUp (req, res) {
  let user = new User(req.body)
  user.save()
  .then( newUser => {
    res.status(200).send({newUser: newUser, message: 'new user is coming'})
  })
  .catch(err => {
    res.status(400).send(err)
  })
}

module.exports = {
  signIn,
  signUp
};


