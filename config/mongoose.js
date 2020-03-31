// require mongoose
const mongoose  = require('mongoose');  
//connecting to db
mongoose.connect('mongodb://localhost/product_ecom_list_db');    
// making the connection of moongoose
const db = mongoose.connection;         

// error
db.on('error',console.error.bind(console,'Error connecting to db'));

// succesfull connection with db
db.once('open',function(){
    console.log('Succussfully connected to database');
});