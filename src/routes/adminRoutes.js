const express = require('express');
const adminRouter= express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav,upload){
    adminRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Library'
        })
    })
    adminRouter.post('/add',upload.single("image"),function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.file.filename
        }
        
        var book=Bookdata(item);
        book.save();
        res.redirect('/books');
    })
    return adminRouter;
}
module.exports=router;