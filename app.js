const express = require('express');
const app = express();
const path= require('path');
const routes=require('./src/routes/proyectoRoutes')


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./src/views'));

app.use(" ", routes)

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(4000,()=>{
    console.log("Puerto 4000")
})

