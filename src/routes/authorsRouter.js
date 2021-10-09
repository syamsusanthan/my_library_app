const express = require('express');
const authorsRouter =express.Router();
function authorroute(nav){
    var authors=[
        {
            title:'Jonathan Swift',
            img:'Herman.jpg',
            about:'Irish author, clergyman and satirist Jonathan Swift grew up fatherless. Under the care of his uncle, he received a bachelors degree from Trinity College and then worked as a statesmans assistant. Eventually, he became dean of St. Patricks Cathedral in Dublin. Most of his writings were published under pseudonyms. He best remembered for his 1726 book Gullivers Travels.'
        },
        {
            title:'Dr. APJ Abdul Kalam',
            img:'arthur.jpg',
            about:'Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering'
        },
        {
            title:' Mohandas Karamchand Gandhi',
           
            img:'daniel.jpg',
            about:'Mahatma Gandhi, byname of Mohandas Karamchand Gandhi, (born October 2, 1869, Porbandar, India—died January 30, 1948, Delhi), Indian lawyer, politician, social activist, and writer who became the leader of the nationalist movement against the British rule of India.'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        })
    })
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',
        {
            nav,
            title:'Library',
            author:authors[id]
        }
        )
    })
    return authorsRouter;
}

module.exports=authorroute;