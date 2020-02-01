const db=require('./db')
const utils=require('./utils')
const express=require('express')

const router=express.Router()
router.post('/add_order', (request, response) => {
    const { user_name,order_date,total_amount} = request.body

    const connection = db.connect()
    const statement = `insert into orders (user_name,order_date,total_amount) values ('${user_name}','${order_date}',${total_amount})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
router.get('/order_list',(request,response)=>
{
    const connection = db.connect()
    const statement = `select cart.user_id,sum(products.product_price) as "Total Amount" from products,cart where cart.product_id=products.product_id group by user_id`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})
router.delete('/placedorder/:user_id',(request,response)=>{
    const {user_id} = request.params
    const connection = db.connect()
    const statement = `delete from cart where user_id=${user_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
router.get('/place_order/:user_id',(request,response)=>{
    const{user_id} = request.params
    const connection = db.connect()
    const statement = `select cart.user_id,sum(products.product_price) as "amount" from products,cart where cart.product_id=products.product_id AND user_id=${user_id};
    `
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
router.get('/',(request,response)=>{
   // const{user_id} = request.params
    const connection = db.connect()
    const statement = `select sysdate() as "order_date",cart.user_id,sum(products.product_price) as "amount" from products,cart where cart.product_id=products.product_id group by user_id`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router