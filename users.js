const paths = require('path');

const express = require('express');
const rutDir = require('../utils/paths');

const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.sendFile(paths.join(rutDir, 'HTMLs', 'users.html'));
});

module.exports = routes;