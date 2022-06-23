const fs = require('fs');
const blogDataPath = "./DB/blogData.json";

const getAllBlogPostFromDB = () => {
try {
    const data = fs.readFileSync(blogDataPath,"utf-8");
    return JSON.parse(data);
} catch (error) {
    throw new Error(error);
}
};

const saveBlogToDB = (blog) => {
try {
 const jsonBlogs = JSON.stringify(blog,null,4);
 console.log(jsonBlogs)
 fs.writeFileSync(blogDataPath,jsonBlogs);   
} catch (error) {
    throw new Error(error);
}
};

module.exports = {
    getAllBlogPostFromDB,
    saveBlogToDB
};
