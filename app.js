const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Request received');
    next();
});

app.get('/', (req, res) => {
    res.json({name: 'devcontainers'});
});

module.exports = app;