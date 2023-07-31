const express = require('express');
const app = express();
const addNumbers = require('./addNumbers').default

app.get('/', (_req, res) => (
    res.send('<h1>Hello World!<h1>')
))

app.post('/add', (req, res) => {
    console.log(req.body);
})


const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
})