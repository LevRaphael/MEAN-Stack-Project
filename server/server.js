const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const routes = require('./routes/base.route');

const app = express();


app.get('/api/getData', function (req, res) {
    res.send('API works!');
});


mongoose.connect(dbConfig.url, {
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.info(`Server is up and running on port ${port}`)
});