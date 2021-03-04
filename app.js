const path = require('path');

const express = require('express');
const nofevicon = require('express-no-favicons');
const bodyParser = require('body-parser');

const app = express();

const homeRoute = require('./routes/home');

app.use(nofevicon());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);

app.listen(3000);