const express = require('express');
const signupRouter= express.Router();
const  Signupdata=require('../model/Signupdata');
signupRouter.get('/',function(req,res){
    res.render("signup",{
        title:'Library'
    }
    )
})
signupRouter.post('/add',async (req,res)=>{

    try{
        const user=req.body.email;
        
        const username= await Signupdata.findOne({email:user});
        
        if(username){
            res.send('User/Email already in use!! Goback and check your entered email id.')
        }else{
            const pwd=req.body.password;
            const paswd= await Signupdata.findOne({password:pwd});
            if(paswd){
                res.send('Password already in use. Goback try another one.')
            }else{
                var item={
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:req.body.password
                }
                var sign= Signupdata(item);
                sign.save();
                res.redirect('/login');
            }
        }
        
    }catch(error){
        res.send('Error occured try again!!'+error)
    }



    
})
module.exports=signupRouter;