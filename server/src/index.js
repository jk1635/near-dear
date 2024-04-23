const express = require('express');

const path = require('path');

const app = express();
const cors = require('cors');

const port = 4000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB 연결 완료');
  })
  .catch(error => {
    console.error(error);
  });

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.use('/users', require('./routes/users'));

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message || 'Internal Server Error');
});

app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(port, () => {
  console.log(`${port}번에서 실행되었습니다.`);
});
