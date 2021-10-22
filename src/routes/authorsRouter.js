const express = require('express');
const authorsRouter =express.Router();
const  Authordata=require('../model/Authordata');
function authorroute(nav,upload){

    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav,
                title:'Library',
                authors
            })
        })
    
    })
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',
            {
                nav,
                title:'Library',
                author
            }
            )
        })
    
    })
    authorsRouter.post('/update/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('updateauthor',
            {
                nav,
                title:'library',
                author
            })
        })
    })
    authorsRouter.post('/updatauthor/:id',upload.single("image"),function(req,res){
        const id= req.params.id;
         const updateDocument= async (id)=>{
            try{
                const result= await Authordata.findByIdAndUpdate({_id:id},{$set:{
                    name:req.body.name,
                    country:req.body.country,
                    genre:req.body.genre
            }},{new:true, useFindAndModify:false});
                res.redirect('/authors');
            }catch(err){
                console.log(err);
            }
           
        }

       updateDocument(id);
    })
    authorsRouter.post('/updateauthorimg/:id',function(req,res){
        const id= req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('upauthorimg',{
                nav,
                title:'library',
                author
            })
        })
       
    })
    authorsRouter.post('/updatauthimg/:id',upload.single("image"),function(req,res){
        const id= req.params.id;
         const updateImage= async (id)=>{
            try{
                const result= await Authordata.findByIdAndUpdate({_id:id},{$set:{
                    image:req.file.filename
            }},{new:true, useFindAndModify:false});
                res.redirect('/authors');
            }catch(err){
                console.log(err);
            }
           
        }

       updateImage(id);
    })
   


    authorsRouter.post('/delete/:id',function(req,res){
        const id= req.params.id;
        const deleteDocument=async (id)=>{
            try{
                const result= await Authordata.findByIdAndDelete({_id:id},{new:true, useFindAndModify:false});
                res.redirect('/authors')
            }catch(err){
                console.log(err);
            }
        }
        deleteDocument(id);
    })
    return authorsRouter;
}

module.exports=authorroute;