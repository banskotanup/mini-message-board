const { Router } = require("express");
const indexRouter = Router();

const message = require('../data');
const ITEMS_PER_PAGE = 6;

indexRouter.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const totalMessages = message.length;
    const totalPages = Math.ceil(totalMessages / ITEMS_PER_PAGE);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const messagesForPage = message.slice(startIndex, endIndex);


    res.render("index", {message: messagesForPage, currentPage: page,
        totalPages: totalPages,});
});

module.exports = indexRouter;