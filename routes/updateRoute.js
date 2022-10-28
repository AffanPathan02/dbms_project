const express = require('express')
const updateController = require('../controllers/update_control')
const Resume = require('../model/resume')

const router=express.Router();

router.get('/update',async (req,res)=>{
    if(req.session.user_id){
        const email_id=req.session.email_id
        const profile=await Resume.findOne({email_id})
        if(profile){
            res.render('update',{pageTitle:'Update Profile',isAuthenticated:true,userName:req.session.username,
            profileName:profile.name,
            profileQuali:profile.qualify,
            profileSkill:profile.skills,
        })
        }else{
            res.render('update',{pageTitle:'Update Profile',isAuthenticated:true,userName:req.session.username,
            profileName:'null',
            profileQuali:'null',
            profileSkill:'null',
        })
        }
        
    }else{
        res.redirect('/login')
    }
})

router.post('/success_update',updateController.postUpdate)

exports.routes = router