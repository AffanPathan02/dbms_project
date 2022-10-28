//modules
const express = require('express');
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
const session=require('express-session')
const { default: mongoose } = require('mongoose');


//Routes
const createPage=require('./routes/createRoute')
const registerPage=require('./routes/registerRoute')
const loginPage=require('./routes/loginRoute');
const logoutPage=require('./routes/logoutRoute')
const updatePage=require('./routes/updateRoute')


const app=express();

//config settings
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({secret:'resources',resave:false,saveUninitialized:false}));

app.set('view engine','pug')
app.set('views','views');

//mongoose setup
mongoose.connect('mongodb://localhost:27017/resources')
.then(()=>{
    console.log('connection Open');
})
.catch((err)=>{
    console.log('error');
})

app.get('/',(req,res)=>{
    if(req.session.user_id){
        res.render('home',{pageTitle:'Home Page',isAuthenticated:true,userName:req.session.username})
    }else{
        res.render('home',{pageTitle:'Home Page',isAuthenticated:false})
    }
})

app.use(createPage.routes)
app.use(registerPage.routes)
app.use(loginPage.routes)
app.use(logoutPage.routes)
app.use(updatePage.routes)

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})