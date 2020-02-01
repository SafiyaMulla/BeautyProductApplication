const db=require('./db')
const utils=require('./utils')
const express=require('express')

const router=express.Router()
router.get('/',(request,response)=>
{
    const connection=db.connect()
    const statement=`select user_id,customer_name,address,email_id,mobile_no  from customers`
    connection.query(statement,(error,data)=>{
     connection.end()
     const users=[]
     for(let index=0;index<data.length;index++)
     {
     const user=data[index]
     users.push({
        user_id:user['user_id'] ,
        customer_name:user['customer_name'],
        address:user['address'],
        email_id:user['email_id'],
        mobile_no:user['mobile_no']
     })
     
     }
     response.send(utils.createResult(error,users))
    })  
})

router.post('/cust_register',(request,response)=>
{
    const{customer_name,address,email_id,password,mobile_no}=request.body
    const connection = db.connect()
    const statement1=`select * from customers where email_id='${email_id}'`
    connection.query(statement1, (error, customers) => {
    if(customers.length == 0){
        const statement =`insert into customers (customer_name,address,email_id,password,mobile_no) values ('${customer_name}','${address}','${email_id}','${password}','${mobile_no}')`
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


router.post('/login',(request,response)=>
{
    const{email_id,password}=request.body
    const connection = db.connect()
    const statement1 = `select * from customers where email_id = '${email_id}'`
    connection.query(statement1, (error, users) => {
        console.log(statement1)
        if (users.length == 0) {
           
                response.send(utils.createResult("user not exist"))
        }
        else{
            const user=users[0]
            const info={
                user_id: user['user_id'],
                customer_name: user['customer_name'],
                email_id:user['email_id'],
                password:user['password']
            }
            response.send(utils.createResult(null,info))
        }
      
    
            
    })    

    
})


router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from customers where user_id = ${id}`
    connection.query(statement, (error, data) => {

        // delete the products from this category
        // const statement2 = `delete from subcategory where category_id = ${category_id }`
        //connection.query(statement2, (error, data) => {
            connection.end()
           response.send(utils.createResult(error, data))
        // })
    })
})   

module.exports=router