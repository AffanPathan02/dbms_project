const express=require('express')
const session=require('express-session')

const router =express.Router();

router.post('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})

exports.routes=router