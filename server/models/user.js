const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true}
})

userSchema.pre('save', function (next) {
  console.log('password baru ', this.password)
  let hash = bcrypt.hashSync(this.password, 10)
  this.password = hash
  console.log('password yang dihash', this.password)
  next()
})

const User = mongoose.model('Users', userSchema)
module.exports = User