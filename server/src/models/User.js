const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
  nickname: {
    type: String,
    required: [true, '닉네임을 입력해주세요.'],
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, '이메일을 입력해주세요.'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, '비밀번호를 입력해주세요.'],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,    required: [true, '비밀번호 확인을 입력해주세요.'],
    minLength: 8,
  },
  phoneNumber: {
    type: String,
    required: [true, '휴대폰 번호를 입력해주세요.'],
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
