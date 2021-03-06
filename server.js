const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT||3000;
var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/Views/partials');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>{
   return new Date().getFullYear();
}
);

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        PageTitle:'Express',
        Name:'Sagar'
    });
});

app.get('/about',(req,resp)=>{
    resp.render('About.hbs',{
        PageTitle:'About'
    });
});
 
app.get('/bad',(req,resp)=>
{
    resp.send(
        {
            status:400,
            message:'NotFound'
        }
    );
});
app.listen(port,console.log('server is up on port',port));