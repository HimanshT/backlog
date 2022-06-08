if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');
const methodOverride = require('method-override');
//connecting database---------------------------------------------------
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, ("connection error")));
db.once("open", () => {
    console.log("database connected");
});
//--------------- Parsing the incoming data-------------------
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//----------------------Routes------------------------
app.get('/', async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
})

app.get('/post/new', (req, res) => {
    res.send('It wil show a create form');
})

app.post('/post', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
})

app.get('/post/:id/update', (req, res) => {
    res.send("It will display an update form");
})

app.put('/post/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { ...req.body });
    await post.save();
    res.send(post);
})

app.delete('/post/:id', async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('server connected');
})
