
const db=require('./db')
const register=(acno,uname,pswd)=>{ 
  return db.App.findOne({acno})
  .then(user=>{
    console.log(user)
    if(user){
     return{
       statusCode:422,
       status:true,
       message:"user exist,please login"
       
      
     }
     
    }
   else{
     const newApp=new db.App({
       acno,
       username:uname,
       password:pswd,
       
     })
     newApp.save()
     return {
       
       status: true,
       statusCode:200,
 
        message:"sucessfully registered"
      }
   }
    
    
  })
     
}
 const login=(req,accno,pswd)=>{
  
  var acno=parseInt(accno)
  return db.App.findOne({acno,pswd})
  .then(user=>{
    
    if(user){
      
      return{
        status:true,
        statusCode:200,
        message:"login sucessful",
        name:user.username,
        acno:user.acno

      }
    }
    else{
      return {
        status:false,
        statusCode:422,
        message:"invalid credentials"
    
      }
    }
  })
}




module.exports={register,login}
