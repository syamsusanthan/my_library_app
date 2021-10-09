const express = require('express');
const app = express();
const port =process.env.PORT || 4000;
const nav =[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/adminbooks',name:'Add Book'},
    {link:'/adminauthor',name:'Add Author'},
    {link:'/login',name:'Logout'}
];

const booksRouter=require('./src/routes/booksRouter')(nav);
const authorsRouter=require('./src/routes/authorsRouter')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const adminauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const mainRouter=require('./src/routes/mainRoutes')(nav);
const logRouter=require('./src/routes/logRoutes');
const signupRouter=require('./src/routes/signupRoutes');
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/adminbooks',adminRouter);
app.use('/adminauthor',adminauthorRouter);
app.use('/main',mainRouter);
app.use('/login',logRouter);
app.use('/signup',signupRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        links:[
            {link:'/login',name:'Login'},{link:'/signup',name:'Signup'}
        ],
        nav,
        title:'Library',
       
    }
    );
});

app.listen(port,()=>{console.log("server is ready at"+port)});
