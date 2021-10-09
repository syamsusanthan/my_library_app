const express = require('express');
const mainRouter= express.Router();
function router(nav){
    mainRouter.get('/',function(req,res){
        res.render("main",{
            nav,
            title:'Library',
            boxlink:[
                {link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/adminbooks',name:'ADD BOOKS'},{link:'/adminauthor',name:'ADD AUTHORS'}
            ]
        })
    })
    return mainRouter;
}
module.exports=router;