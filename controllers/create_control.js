const express=require('express')
const Resume=require('../model/resume')

exports.postResume = async (req,res)=>{
    const {name,qualify,skills}=req.body
    const resume=new Resume({
        name,
        qualify,
        skills
    })
    await resume.save()
    res.render('success_login',{pageProp:'Saved Resume'})
}