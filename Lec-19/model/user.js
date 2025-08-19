const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  username: String,
  password: String,
  email: String,
  date: Date
});

User.virtual('id').get(function () {
  return this._id.toHexString();
});

User.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Users', User);