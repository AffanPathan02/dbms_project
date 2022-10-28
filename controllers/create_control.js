const express=require('express')
const Resume=require('../model/resume')
const User=require('../model/user')

exports.postResume = async (req,res)=>{
    const email_id=req.session.email_id
    const {name,qualify,skills}=req.body
    const resume=new Resume({
        email_id,
        name,
        qualify,
        skills
    })
    // console.log(email_id);
    await resume.save()
    res.render('success_login',{pageProp:'Saved Resume'})
}