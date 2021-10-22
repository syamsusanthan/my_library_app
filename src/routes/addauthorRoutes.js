const express = require('express');
const adminauthorRouter= express.Router();
const  Authordata=require('../model/Authordata');
function router(nav,upload){
    adminauthorRouter.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'Library'
        })
    })
    adminauthorRouter.post('/add',upload.single("image"),function(req,res){
        var item={
            name:req.body.name,
            country:req.body.country,
            genre:req.body.genre,
            image:req.file.filename
        }
        var author= Authordata(item);
        author.save();
        res.redirect('/authors');
    })
    return adminauthorRouter;
}
module.exports=router;