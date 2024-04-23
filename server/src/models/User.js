const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
  nickname: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  passwordConfirm: {
    type: String,
    minLength: 5,
  },
  phoneNumber: {
    type: Number,
    default: 0,
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
