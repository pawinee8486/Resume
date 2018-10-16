const express = require('express')
const path = require('path')
const app = express()
const port = 8000


app.use(express.static(path.join(__dirname,'view')));

app.get('/*',function(req,res){
        res.sendFile(path.join(__dirname,'view','index.html'))
});


app.listen(port, () => console.log('app listening on port'+port))

