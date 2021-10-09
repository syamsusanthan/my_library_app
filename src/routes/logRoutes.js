const express = require('express');
const logRouter= express.Router();
logRouter.get('/',function(req,res){
    res.render("login",{
        title:'Library'
    }
    )
})
module.exports=logRouter;