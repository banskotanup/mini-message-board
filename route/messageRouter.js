const { Router } = require("express");
const messageRouter = Router();

const fs = require('fs');

const message = require('../data');

messageRouter.get('/', (req, res) => {
    res.render('form');
});

messageRouter.post('/', (req, res) => {
    const { messageText, messageUser } = req.body;
    message.push({ text: messageText, user: messageUser, added: new Date().toLocaleDateString('en-GB') });
    res.redirect('/');
});

module.exports = messageRouter;