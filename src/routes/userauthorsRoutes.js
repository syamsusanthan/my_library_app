const express = require('express');
const userauthorsRouter= express.Router();
const  Authordata=require('../model/Authordata');
userauthorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("userauthors",{
            nav :[
                {link:'/userbooks',name:'Books'},
                {link:'/userauthors',name:'Authors'},
                {link:'/login',name:'Logout'}
            ],
            title:'Library',
            boxlink:[
                {link:'/userbooks',img:'bookicon.jpg'},{link:'/userauthors',img:'authoricon.jpg'}
            ],authors
        })
    })
    
})
userauthorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('userauthor',
        {
            nav :[
                {link:'/userbooks',name:'Books'},
                {link:'/userauthors',name:'Authors'},
                {link:'/login',name:'Logout'}
            ],
            title:'Library',
            author
        }
        )
    })

})
module.exports=userauthorsRouter;