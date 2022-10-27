const express = require('express');
const session=require('express-session');

const resumeController = require('../controllers/create_control')

const router = express.Router();

router.get('/create',(req,res)=>{
    if(req.session.user_id){
        res.render('create',{pageTitle:'Create Page',isAuthenticated:true,userName:req.session.username})
    }
    else{
        res.redirect('/login')
    }
})

router.post('/success_page',resumeController.postResume)
exports.routes=router