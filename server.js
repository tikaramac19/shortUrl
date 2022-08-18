const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ShortUrl = require('./model/shortUrl')

// connect to the database

mongoose.connect("mongodb://localhost/urlShortner", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortUrl", async(req, res) => {
   await ShortUrl.create({
        full: req.body.fullUrl
    })

    res.redirect('/');
});

app.listen(8080, () => {
  console.log("server started at http://localhost:8080");
});
