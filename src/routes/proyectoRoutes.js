const express= require('express');

const routes=express.Router();
const {
    renderHome,
} = require("../controllers/proyectoControllers")

routes.get("/",renderHome);

module.exports=routes;