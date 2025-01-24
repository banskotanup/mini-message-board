const { Router } = require("express");
const messageRouter = Router();

messageRouter.get('/', (req, res) => {
   res.send("This is new message section.") 
});

module.exports = messageRouter;