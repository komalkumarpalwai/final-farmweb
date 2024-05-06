const express = require('express');
const app = express();
const path = require('path');

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/join', (req, res) => {
    res.render('join');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/product', (req, res) => {
    res.render('product');
});
app.get('/rice', (req, res) => {
    res.render('rice');
});
app.get('/milk', (req, res) => {
    res.render('milk');
});
app.get('/manjo', (req, res) => {
    res.render('manjo');
});
app.get('/coconut', (req, res) => {
    res.render('coconut');
});
app.get('/blog', (req, res) => {
    res.render('blog');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
