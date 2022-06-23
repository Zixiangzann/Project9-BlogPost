const express = require("express");
const blogRouter = require("./routes/blog.routes");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.json());
app.use("/api",blogRouter);




const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
console.log(`Started on port ${PORT}`);
});