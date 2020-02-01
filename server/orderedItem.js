const db=require('./db')
const utils=require('./utils')
const express=require('express')

const router=express.Router()
router.post('/add_orderitems', (request, response) => {
    const { order_id,user_name,product_name,quantity,amount} = request.body

    const connection = db.connect()
    const statement = `insert into ordered_items (order_id,user_name,product_name,quantity,amount) values (${order_id},'${user_name}','${product_name}',${quantity},${amount})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
router.get('/orderitems_list',(request,response)=>
{
    const connection = db.connect()
    const statement = `select cart.*,products.thumbnail,products.product_price from products,cart where cart.product_id=products.product_id`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})

module.exports = router