const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const xss = require('xss-clean')
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const cookieParser = require('cookie-parser');
const path = require('path');

const router = require('./src/routes/api.js');
const app = new express();

let DATABASE = "mongodb+srv://devtowhid:devtowhid486@cluster01.j4mr8.mongodb.net/Ecommerce_Project?retryWrites=true&w=majority";
mongoose.connect(DATABASE,{autoIndex:true}).then((res) =>{
    console.log("Database Connected");
}).catch((err) =>{
    console.log(err)
})

app.use(cookieParser())
app.use(cors({
    credentials:true,
}));
app.use(
    helmet.contentSecurityPolicy({
        useDefaults:true,
        directives: {
            "img-src": ["'self'", "https: data:"],
        },
    })
)
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}));

const limiter =  rateLimit({windowMs: 15*60*1000, max: 3000})
app.use(limiter)

app.set('etag', false);
app.use('/api/v1', router);

//Add React Frontend initial Directory  
app.use(express.static(path.join(__dirname, '../client/dist')));
// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname, '../client','dist','index.html'))
})

module.exports = app;