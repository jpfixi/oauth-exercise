const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

//set up view engine
app.set('view engine', 'ejs');

//connect to MongoDB
mongoose.connect(keys.mongodb.dbURI,{ useNewUrlParser: true }, (err, client) => {
    //  console.log(' client ', client)
})

//set up routes
app.use('/auth',authRoutes);



//create home route
app.get('/', (req,res) => {
    res.render('home');
});


app.listen(3000, () => {
    console.log('app listening for requests on port 3000');
});