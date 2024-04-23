const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async(req, res, next) => {
  // 유저 데이터를 저장
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.post('/login', (req, res) => {
  // 유저 로그인
});

router.get('/auth', (req, res) => {
  // 유저 인증 체크
});

module.exports = router;