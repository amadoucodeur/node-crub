const PostModel = require("../models/post.model");

module.exports.setPost = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ messge: "gos erreur" });
  }
  const post = PostModel.create({
    message: req.body.message,
    author: req.body.author
  })
  res.status(200).json(post)
};
