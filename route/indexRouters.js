const { Router } = require("express");
const indexRouter = Router();

const message = require('../data');

indexRouter.get('/', (req, res) => {
    res.render("index", {message: message});
});

module.exports = indexRouter;