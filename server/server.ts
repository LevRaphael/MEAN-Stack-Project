import * as express from 'express';

const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const routes = require('./routes/base.route');

const app = express()
const port =  '3000';

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.get('/api/getData', function (req, res) {
    res.send({"test":"API works!"});
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});