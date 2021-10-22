const express = require('express');
const logRouter= express.Router();
const  Signupdata=require('../model/Signupdata');

logRouter.get('/',function(req,res){
    res.render("login",{
        title:'Library'
    }
    )
})
logRouter.post('/', async(req,res)=>{
   try{
    const user=req.body.username;
    const password=req.body.password;
    if(user=="admin"&&password=="1234"){
        res.redirect('/main');
    }
    const username= await Signupdata.findOne({email:user});
    if(username.password==password){
        res.redirect('/usermain');
    }else{
        res.send("User not found Go back and try again!!");
    }
   } catch(error){
    res.send("User not found go back and try again!!");
   }
})
module.exports=logRouter;