const express=require('express')
const bcrypt=require('bcrypt')
const session=require('express-session')

const User=require('../model/user')

exports.postLogin = async (req,res)=>{
    const {email_id,password}=req.body
    const user=await User.findOne({email_id})
    if(user){
        try{
            const validPassword =await bcrypt.compare(password,user.password)
            if(validPassword){
                req.session.user_id=user._id
                req.session.username=user.name
                req.session.email_id=user.email_id

                res.render('success_login',{pageProp:'Login'}); 

            }else{
                res.render('auth/login',{pageProp:'Login',message:'Incorrect UserName and Password'})
            }
    
        }catch(error){
            res.send(error)
        }
    }
    else{
        res.render('auth/login',{pageProp:'Login',message:'User Name not found'})
    }
}