const express = require('express');
const signupRouter= express.Router();
signupRouter.get('/',function(req,res){
    res.render("signup",{
        title:'Library'
    }
    )
})
module.exports=signupRouter;