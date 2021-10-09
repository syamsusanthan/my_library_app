const express = require('express');
const booksRouter =express.Router();
function routes(nav){
    var books=[
        {
            title:'Gullivers Travels',
            author:' Jonathan Swift',
            genre:' Satire, ‎fantasy‎',
            img:'mob.jpg'
        },
        {
            title:'Wings of Fire',
            author:'Dr. APJ Abdul Kalam',
            genre:'Autobiography‎',
            img:'sherlok.jpg'
        },
        {
            title:'The Story Of My Experiments With Truth  ',
            author:' Mohandas Karamchand Gandhi',
            genre:' Autobiography',
            img:'rob.jpg'
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        })
    })
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',
        {
            nav,
            title:'Library',
            book:books[id]
        }
        )
    })
    return booksRouter;
}

module.exports=routes;