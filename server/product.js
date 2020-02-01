const db= require('./db')
const utils=require('./utils')
const express=require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnail/'})


const router = express.Router()

router.get('/',(request,response)=>
{
    const connection = db.connect()
    const statement = `select p.product_id,p.product_name,p.product_description,p.product_price,c.category_name,p.thumbnail from products p inner join  category c on p.category_id=c.category_id`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})



router.get('/details/:product_id',(request,response)=>
{
    const {product_id} = request.params
    const connection = db.connect()
    const statement = `select * from products where product_id=${product_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})


router.put('/:id', (request, response) => {
    const {id} = request.params
    const {product_name,product_description,product_price,category_id,thumbnail} = request.body

    const connection = db.connect()
    const statement = `update products set product_name= '${product_name}', product_description = '${product_description}', product_price = '${product_price}', category_id= '${category_id}',thumbnail = '${thumbnail}' where product_id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.post('/', upload.single('thumbnail'), (request, response) => {
    const {product_name, product_description, product_price, category_id} = request.body
    
    const thumbnail = request.file.filename

    const connection = db.connect()
    const statement = `insert into products (product_name, product_description, product_price,category_id,thumbnail)values ('${product_name}', '${product_description}', ${product_price}, ${category_id},'${thumbnail}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from products where product_id = ${id}`
    connection.query(statement, (error, data) => {
            connection.end()
           response.send(utils.createResult(error, data))
        
    })
})

router.delete('/category/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from category where category_id = ${id}`
    connection.query(statement, (error, data) => {

        // delete the products from this category
        // const statement2 = `delete from subcategory where category_id = ${category_id }`
        //connection.query(statement2, (error, data) => {
            connection.end()
           response.send(utils.createResult(error, data))
        // })
    })
})

router.get('/category',(request,response)=>
{
    const connection = db.connect()
    const statement = `select * from category`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
})
})
router.post('/category', (request, response) => {
    const { category_name} = request.body

    const connection = db.connect()
    const statement = `insert into category ( category_name) values ('${category_name}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
    
})

router.get('/cat_product/:category_id',(request,response)=>
{
    const {category_id} = request.params
    const connection=db.connect()
    const statement=`select product_id,product_name,product_description,product_price,thumbnail from products where category_id=${category_id}`
    connection.query(statement, (error, data) => {
    connection.end()
    response.send(utils.createResult(error,data))
})
})


router.post('/search',(request,response)=>
{
    const { product_name} = request.body
    const connection=db.connect()
    const statement=`select product_id,product_name,product_description,product_price,thumbnail from products where product_name like '%${product_name}%'`
    connection.query(statement, (error, data) => {
    connection.end()
    response.send(utils.createResult(error,data))
})
})



 
module.exports = router
