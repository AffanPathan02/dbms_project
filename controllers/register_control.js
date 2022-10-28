
////////////////RESOUCES WEBSITE/////////////////////


const express=require('express')
const bcrypt=require('bcrypt')
const User=require('../model/user')

exports.postRegister=async(req,res)=>{
    const{name,email_id,password}=req.body
    const hash=await bcrypt.hash(password,12);
    const user=new User({
        name,
        email_id,
        password:hash
    })
    await user.save()
    res.render('success_login',{pageProp:'User Created'})
}