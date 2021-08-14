const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/praApp',
{
    useNewUrlParse:true,
    useUnifiedTopology:true
})
const App= mongoose.model('App',
{
    acno:Number,
    username:String,
    
    password:String
})
module.exports={App}