const express = require('express');
const usermainRouter= express.Router();
usermainRouter.get('/',function(req,res){
    res.render("usermain",{
        nav :[
            {link:'/userbooks',name:'Books'},
            {link:'/userauthors',name:'Authors'},
            {link:'/login',name:'Logout'}
        ],
        title:'Library',
        boxlink:[
            {link:'/userbooks',name:'BOOKS'},{link:'/userauthors',name:'AUTHORS'}
        ]
    })
})
module.exports=usermainRouter;