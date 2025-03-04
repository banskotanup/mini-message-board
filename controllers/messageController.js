const db = require("../db/queries");

exports.getForm = (req, res) => {
    res.render("form");
};

exports.postForm = async(req, res) => {
    const { messageUser, messageText } = req.body;
    await db.insertNewMessage(messageUser, messageText);
    res.redirect("/");
};