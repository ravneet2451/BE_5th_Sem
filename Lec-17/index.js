const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./model/blog');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//create
app.post('/blogs', async(req, res) => {
    let title = req.body.title;
    let body = req.body.body;   
    let blog={
        title: title,
        body: body,
        date: Date.now()

    }
    let newBlog=new Blog(blog)
    await newBlog.save()
    res.json({
        success: true,
        message: "Blog created successfully",
        data: newBlog
    });
})

//read
//read all data
//read single data
app.get('/blogs', async(req, res) => {
    let allBlogs = await Blog.find();
    res.json({
        success: true,
        message: "all data fetched successfully",
        data: allBlogs
    });
});
app.get('/blogs/:id', async(req, res) => {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true,  
        message: "single data fetched successfully",
        data: blog  
    });
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
app.listen(3300, () => {
  console.log('Server is running on port 3300');
});