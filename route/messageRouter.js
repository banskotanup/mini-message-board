const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();


messageRouter.get('/', messageController.getForm);

messageRouter.post('/', messageController.postForm);

module.exports = messageRouter;