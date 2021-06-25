const  express = require('express'),
app = express(),
ejs = require('ejs');

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/about', (req,res)=>{
    
res.render('about',{title:"About Us"})

})

app.get('/connect', (req,res)=>{
    res.render('connect',{
        title:"Connect"
    })
})
app.get('/give', (req,res)=>{
    res.render('give',{
        title:"Give"
    })
})


port = process.env.PORT;
 if (port==null || port==""){
     port=3000;
 }
app.listen(port, ()=>{
    console.log("server started at port "+ port)
})