const express=require('express')
const session = require('express-session')

const Resume=require('../model/resume')
const User=require('../model/user')

exports.postUpdate=async (req,res)=>{
    const {name,qualify,skills}=req.body
    const email_id = req.session.email_id
    try {
        const result = await Resume.findOneAndUpdate({email_id:email_id},{
            $set:{
                name:name,
                qualify:qualify,
                skills:skills
            }
        })
        console.log(result);
        res.render('success_login',{pageProp:'updated'})
    } catch (error) {
        console.log(error);
    }
}

