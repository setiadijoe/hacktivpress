require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET_KEY

function hasLogin (req, res, next) {
  jwt.verify(req.headers.token, key, (err, decoded) => {
    if (err) {
      console.log(`you don't have authentication`)
    } else {
      req.headers = decoded
      console.log(req.headers)
      next()
    }
  })
}
module.exports = {
  hasLogin
}