const express = require('express');
const app = express();

app.set('view engine','ejs' )

app.get('/', (req,res)=>{
   res.render('index')
})

app.post("/shortUrl", (req,res)=>{
    
})


app.listen(8080, ()=>{
    console.log("server started at http://localhost:8080")
});