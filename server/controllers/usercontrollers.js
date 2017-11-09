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
      let token = {
        id = userSignIn._id,
        name = userSignIn.name
      }
    }
  })
}


