const db=require('./db')
const utils=require('./utils')
const express=require('express')

const router=express.Router()
router.get('/',(request,response)=>{
    const connection=db.connect()
    const statement=`select * from users`
    connection.query(statement,(error,data)=>{
     connection.end()
     const users=[]
     for(let index=0;index<data.length;index++)
     {
     const user=data[index]
     users.push({
        user_id:user['user_id'] ,
        user_name:user['user_name'],
        email_id:user['email_id'],
        password:user['password'],
        mobile_no:user['mobile_no']

     })
     
     }
     response.send(utils.createResult(error,users))
    })  
})
router.post('/login',(request,response)=>
{
    const{email_id,password}=request.body
    const connection = db.connect()
    const statement1 = `select * from users where email_id = '${email_id}'`
    connection.query(statement1, (error, users) => {

        if (users.length == 0) {
           
                response.send(utils.createResult("user not exist"))
        }
        else{
            const user=users[0]
            const info={
                
                email_id:user['email_id'],
                password:user['password']
            }
            response.send(utils.createResult(null,info))
        }
      
    
            
    })    

    
})

     

router.post('/register',(request,response)=>
{
    const{user_name,email_id,password,mobile_no}=request.body
    const connection = db.connect()
    const statement1=`select * from users where email_id='${email_id}'`
    connection.query(statement1, (error, users) => {
    if(users.length == 0){
        const statement =`insert into users (user_name,email_id,password,mobile_no) values ('${user_name}','${email_id}','${password}','${mobile_no}')`
        connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createResult(error, data))
        })
    } else {
        connection.end()
        response.send(utils.createResult('email exists. please use another email.'))
    }
    })

})



module.exports=router