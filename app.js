require("dotenv").config();

const express = require("express");
const app = express();

const path = require('path');

const indexRouter = require("./route/indexRouters");
const messageRouter = require("./route/messageRouter");

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}.`); 
});