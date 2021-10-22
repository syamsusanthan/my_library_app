const express = require('express');
const app = express();
const port =process.env.PORT || 4000;
const path=require('path');
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
});
const upload=multer({storage:storage});
const nav =[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/adminbooks',name:'Add Book'},
    {link:'/adminauthor',name:'Add Author'},
    {link:'/login',name:'Logout'}
];

const booksRouter=require('./src/routes/booksRouter')(nav,upload);
const authorsRouter=require('./src/routes/authorsRouter')(nav,upload);
const adminRouter=require('./src/routes/adminRoutes')(nav,upload);
const adminauthorRouter=require('./src/routes/addauthorRoutes')(nav,upload);
const mainRouter=require('./src/routes/mainRoutes')(nav);
const logRouter=require('./src/routes/logRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const usermainRouter=require('./src/routes/usermainRoutes');
const userbooksRouter=require('./src/routes/userbooksRoutes');
const userauthorsRouter=require('./src/routes/userauthorsRoutes');
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/adminbooks',adminRouter);
app.use('/adminauthor',adminauthorRouter);
app.use('/main',mainRouter);
app.use('/usermain',usermainRouter);
app.use('/login',logRouter);
app.use('/signup',signupRouter);
app.use('/userbooks',userbooksRouter);
app.use('/userauthors',userauthorsRouter);
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
