const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors')
const dataService=require('./services/data.service');

app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))
app.listen(2000,()=>{
    console.log("server started at port:2000");
})
app.get('/',(req,res)=>{
    res.status(401).send("this is get method")
})
app.post('/register',(req,res)=>{
    
    dataService.register(req.body.acno,req.body.uname,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/login',(req,res)=>{
    
    dataService.login(req.body.acno,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})