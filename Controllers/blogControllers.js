const BlogModel = require("../Models/blogModel")

const createBlog= async function (req, res) {
    let blog = req.body
    let blogCreated = await BlogModel.create(blog)
    res.send({data: blogCreated})
}

module.exports.createBlog= createBlog;