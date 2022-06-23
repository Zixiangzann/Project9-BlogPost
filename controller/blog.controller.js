const { getAllBlogPostFromDB, saveBlogToDB } = require("../utils/blog.utils");


const getAllBlog = (req, res) => {
    try {
        const blogs = getAllBlogPostFromDB();
        res.json(blogs);
    } catch (error) {
        res.status(500).send("Failed to get blog");
    }
}

const addNewBlog = (req, res) => {
    try {
        const blogs = getAllBlogPostFromDB();
        const newBlogs = { "id": getAllBlogPostFromDB().length + 1, ...req.body };
        blogs.push(newBlogs);
        saveBlogToDB(blogs);
        res.json(blogs);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

const getBlogByID = (req, res) => {
    try {
        const id = req.params.id;
        const blogs = getAllBlogPostFromDB();

        //if database dont have the params id, throw error
        if(blogs.some(blog => blog.id === +id) === false){
            throw "No such ID in database";
        }

        blogs.map((blog, i) => {
            if (blog.id === +id) {
                res.json(blog);
            }
        })

    } catch (error) {
        if(error==="No such ID in database"){
            res.status(500).send(error)
        }else{
        res.status(500).send("Something went wrong");
    }
    }
}

const editBlogByID = (req, res) => {
    try {
        const id = req.params.id;
        const blogs = getAllBlogPostFromDB();
        if (req.body.id !== undefined) throw 'Unable to change ID';

        blogs.map((blog, i) => {

            if (blog.id === +id) {
                blogs[i] = { ...blog, ...req.body };
                res.json(blogs[i]);
            }
        }
        )

        saveBlogToDB(blogs);

    } catch (error) {
        if (error === 'Unable to change ID') {
            res.status(500).send(error);
        } else {
            res.status(500).send("Something went wrong");
        }
    }
}

const deleteBlogByID = (req,res) => {
    try {
        const id = req.params.id;
        const blogs = getAllBlogPostFromDB();

        if(blogs.some(blog => blog.id === +id) === false){
            throw "No such ID in database";
        }

        const updatedBlogs = blogs.filter((blog) => blog.id != id);
        saveBlogToDB(updatedBlogs);
        res.json(updatedBlogs);
    } catch (error) {
        if(error==="No such ID in database"){
            res.status(500).send(error)
        }else{
        res.status(500).send("Something went wrong");
    }
    }
}


module.exports = { getAllBlog, addNewBlog, getBlogByID, editBlogByID ,deleteBlogByID};

