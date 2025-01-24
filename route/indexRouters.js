const { Router } = require("express");
const indexRouter = Router();

const message = [
    {
        text: "Hi there",
        user: "Anup",
        added: new Date()
    },
    {
        text: "How are you?",
        user: "Hari",
        added: new Date()
    },
    {
        text: "This is new message",
        user: "Ram",
        added: new Date()
    }
]

indexRouter.get('/', (req, res) => {
    res.send("Hello, I'm homepage."); 
});

module.exports = indexRouter;