require('dotenv').config();

const express = require('express');

const app = express();

const router = require('./app/router');

app.get('/', (req, res) => res.send('working'));

app.use('/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`listening at http://localhost:${process.env.PORT}`);
});

module.exports = app;
