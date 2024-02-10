const router = require("express").Router();
const Agent = require("../models/agent");
let Chat = require("../models/chats");
const Message = require("../models/message");

const chatsRouter = (io) => {
  router.route("/").get((req, res) => {
    Chat.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("Error: " + err));
  });
