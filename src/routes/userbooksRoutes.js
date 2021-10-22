const express = require('express');
const userbooksRouter= express.Router();
const Bookdata=require('../model/Bookdata');
userbooksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("userbooks",{
            nav :[
                {link:'/userbooks',name:'Books'},
                {link:'/userauthors',name:'Authors'},
                {link:'/login',name:'Logout'}
            ],
            title:'Library',
            boxlink:[
                {link:'/userbooks',img:'bookicon.jpg'},{link:'/userauthors',img:'authoricon.jpg'}
            ],books
        })
    })
    
})
userbooksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('userbook',
        {
            nav :[
                {link:'/userbooks',name:'Books'},
                {link:'/userauthors',name:'Authors'},
                {link:'/login',name:'Logout'}
            ],
            title:'Library',
            book
        }
        )
    })

})
module.exports=userbooksRouter;