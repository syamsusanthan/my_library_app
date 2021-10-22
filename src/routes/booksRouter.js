const express = require('express');
const booksRouter =express.Router();
const Bookdata=require('../model/Bookdata');
function routes(nav,upload){
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Library',
                books
            })
        })
     
    })
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',
            {
                nav,
                title:'Library',
                book
            }
            )
        })
    
    })
    booksRouter.post('/update/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('update',
            {
                nav,
                title:'library',
                book
            })
        })
    })
    booksRouter.post('/updatbook/:id',upload.single("image"),function(req,res){
        const id= req.params.id;
         const updateDocument= async (id)=>{
            try{
                const result= await Bookdata.findByIdAndUpdate({_id:id},{$set:{
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre
                 
            }},{new:true, useFindAndModify:false});
                res.redirect('/books');
            }catch(err){
                console.log(err);
            }
           
        }

       updateDocument(id);
    })
    booksRouter.post('/updateimg/:id',function(req,res){
        const id= req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('updateimage',{
                nav,
                title:'library',
                book
            })
        })
       
    })
    booksRouter.post('/updatbookimg/:id',upload.single("image"),function(req,res){
        const id= req.params.id;
         const updateImage= async (id)=>{
            try{
                const result= await Bookdata.findByIdAndUpdate({_id:id},{$set:{
                    image:req.file.filename
            }},{new:true, useFindAndModify:false});
                res.redirect('/books');
            }catch(err){
                console.log(err);
            }
           
        }

       updateImage(id);
    })


    booksRouter.post('/delete/:id',function(req,res){
        const id= req.params.id;
        const deleteDocument=async (id)=>{
            try{
                const result= await Bookdata.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false});
                res.redirect('/books')
            }catch(err){
                console.log(err);
            }
        }
        deleteDocument(id);
    })
    return booksRouter;
}

module.exports=routes;