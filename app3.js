const express = require('express');
const bp = require('body-parser');
const paths = require('path');
const slashroutes = require('./routers/users.js');
const userroutes = require('./routers/add-users.js');

const app3 = express();

app3.use(bp.urlencoded({extended: false}));
app3.use(express.static(paths.join(__dirname,'Public')));


app3.use(slashroutes);
app3.use(userroutes); 



app3.use((req,res,next) =>{
    res.status(404).sendFile(paths.join(__dirname, 'HTMLs', '404.html'));
});

app3.listen(3000);
