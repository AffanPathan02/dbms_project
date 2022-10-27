const express=require('express')
const session=require('express-session')

const loginController=require('../controllers/login_control');
const user = require('../model/user');
const router=express.Router();

router.get('/login',(req,res)=>{
    if(req.session.user_id){
        res.render('home',
        {pageTitle:'Home Page',
        isAuthenticated:true,
        userName:req.session.username,
        message_login:'Already Logged In'
    })
    }
    else{
        res.render('auth/login',{pageTitle:'Login Page',isAuthenticated:false})
    }
})

router.post('/success_login',loginController.postLogin)

exports.routes =router