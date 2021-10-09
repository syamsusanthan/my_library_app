const express = require('express');
const adminauthorRouter= express.Router();

function router(nav){
    adminauthorRouter.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'Library'
        })
    })
    adminauthorRouter.get('/add',function(req,res){
        res.send("Author is successfully added");
    })
    return adminauthorRouter;
}
module.exports=router;