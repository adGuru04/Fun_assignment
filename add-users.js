const paths = require('path');

const express= require('express');

const rutDir = require('../utils/paths');

const routes = express.Router();

routes.get( '/users', (req,res,next) =>{
    res.sendFile(paths.join(rutDir, 'HTMLs', 'add-users.html'));
});

routes.post( '/users', (req,res,next) =>{
    console.log(req.body);
    res.redirect('/users');
});

module.exports = routes;