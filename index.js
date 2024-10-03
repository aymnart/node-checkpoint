const express = require('express');
const app = express();

const port = 3301;

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})



app.listen(port,(err)=>{
    err ? console.log(err): console.log(`http://localhost:${port}`)
})  