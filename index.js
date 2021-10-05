// Adding 3rd Party modules
const express = require('express');
const app= express();
const port=4000;

app.get('/',(req,res)=>{
   
    res.send("Welcome"); 

})

app.get('/home',(req,res)=>{
   
    res.send("Welcome to Home"); 

})

app.listen(port,()=>{
    console.log("Our first express server");
})