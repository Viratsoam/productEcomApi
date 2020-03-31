// Require express
const express = require('express');
const app = express();
// set the port 
const port = 8000;
// moongoose
const db = require('./config/mongoose');        
// middlewares
app.use(express.urlencoded());        
app.use(express.json())
app.use('/',require('./routes'))

// listen to the port 
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${port}`);
        return;
    }
    console.log(`Server is up on port:${port}`);
});
