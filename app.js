const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Hello World")
})

app.get('/deployed',function(req,res){
    res.send("Deployment Worked!")
})

app.listen(5498)