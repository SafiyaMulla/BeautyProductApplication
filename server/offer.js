const db= require('./db')
const utils=require('./utils')
const express=require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnail/'})


const router = express.Router()
router.get('/details/:offer_id',(request,response)=>
{
    const {offer_id} = request.params
    const connection = db.connect()
    const statement = `select * from offer where offer_id=${offer_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})
router.get('/',(request,response)=>
{
    const connection = db.connect()
    const statement = `select * from offer`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})
router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from offer where offer_id = ${id}`
    connection.query(statement, (error, data) => {
            connection.end()
           response.send(utils.createResult(error, data))
        
    })
})

router.put('/:id', (request, response) => {
    const {id} = request.params
    const {product_name,product_description,product_price,discount,final_price,thumbnail} = request.body

    const connection = db.connect()
    const statement = `update offer set product_name= '${product_name}', product_description = '${product_description}', product_price = '${product_price}', discount= '${discount}', final_price= '${final_price}',thumbnail = '${thumbnail}' where offer_id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', upload.single('thumbnail'), (request, response) => {
    const {product_name, product_description, product_price,discount,final_price} = request.body
    
    const thumbnail = request.file.filename

    const connection = db.connect()
    const statement = `insert into offer(product_name, product_description, product_price,discount,final_price,thumbnail)values ('${product_name}', '${product_description}', ${product_price}, ${discount},${final_price},'${thumbnail}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
module.exports = router