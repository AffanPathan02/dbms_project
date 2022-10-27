const express=require('express')
const session=require('express-session')

const registerController=require('../controllers/register_control');
const user = require('../model/user');

const router=express.Router();

router.get('/register',(req,res)=>{
    if(req.session.user_id){
        res.render('home',
        {pageTitle:'Home Page',
        isAuthenticated:true,
        userName:req.session.username,
        message_register:'Already Logged IN'
        })
    }
    else{
        res.render('auth/register',{pageTitle:'Register Page',isAuthenticated:false})
    }
})

router.post('/register',registerController.postRegister)

exports.routes=router