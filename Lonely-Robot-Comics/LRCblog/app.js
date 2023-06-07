require('dotenv').config();

const express = require("express");
const expresslayout = require('express-ejs-layouts')
const app = express();
const PORT = 5000;

app.use(express.static('Public'));
app.use(expresslayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./Server/routes/main'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

