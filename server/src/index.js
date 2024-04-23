const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(4000, () => {
    console.log(`${port}번에서 실행되었습니다.`);
});
