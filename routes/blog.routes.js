const router = require("express");

const {getAllBlog,addNewBlog,getBlogByID,editBlogByID,deleteBlogByID} = require("../controller/blog.controller");

const blogRouter = router.Router();

//1. Show all blogs (GET: /blogs)
blogRouter.get("/blogs",getAllBlog);

//2. Show single blog with id (GET: /blogs/:id)
blogRouter.get("/blogs/:id",getBlogByID);

//3. Edit single blog with id (PUT: /blogs/:id)
blogRouter.put("/blogs/:id",editBlogByID);

//4. Delete single blog with id (DELETE: /blogs/:id)
blogRouter.delete("/blogs/:id",deleteBlogByID);

//5. Create new blog (POST: /blogs)
blogRouter.post("/blogs",addNewBlog);


module.exports = blogRouter;