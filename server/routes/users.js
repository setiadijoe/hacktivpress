var express = require('express');
var router = express.Router();
const User = require('../controllers/usercontrollers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/signin', User.signIn)
router.post('/signup', User.signUp)

module.exports = router;
