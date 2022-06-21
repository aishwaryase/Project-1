const express = require('express');
const router = express.Router();

const BlogController = require("../Controllers/blogControllers")
const AuthorController = require("../Controllers/authorControllers")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/blogs", BlogController.createBlog)
router.post("/BASE_URL/authors", AuthorController.creatAuthor)

module.exports = router;

