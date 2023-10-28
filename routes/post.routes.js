const express = require("express");
const { setPost } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", setPost);

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "message du router pos: post" });
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: "message du router pos: put" });
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: "message du router pos: delete" });
});

router.patch("/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: "message du router pos: patch" });
});
module.exports = router;
