const db=require('./db')
const utils=require('./utils')
const express=require('express')
const router=express.Router()



router.get('/add_cart',(request,response)=>
{
    const {product_id} = request.params
    const connection=db.connect()
    const statement=`select * from cart `
    connection.query(statement, (error, data) => {
    connection.end()
    response.send(utils.createResult(error,data))
})
})
router.delete('/delete_cart/:cart_id',(request,response)=>{
    const {cart_id} = request.params
    const connection = db.connect()
    const statement = `delete from cart where cart_id=${cart_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.get('/add_cart/:user_id',(request,response)=>{
    const{user_id} = request.params
    const connection = db.connect()
    const statement = `select cart.cart_id,cart.product_id,products.product_name,products.product_price,products.thumbnail from cart,products where cart.product_id=products.product_id AND cart.user_id=${user_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/add/:product_id',(request,response)=>
{
    const{product_id} = request.params
    const{user_id}=request.body
    
    const connection=db.connect()
    const statement = `insert into cart (user_id,product_id)values(${user_id},${product_id})`
    console.log(statement)
    //const statement=`select thumbnail,product_name,product_price from products where product_id=${product_id}`
    connection.query(statement, (error, data) => {
    connection.end()
    response.send(utils.createResult(error,data))
})
})





module.exports=router