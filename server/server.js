const express=require('express')
const bodyParser=require('body-parser')
const routerUser=require('./user')
const routerProduct = require('./product')
const routerCustomer = require('./customer')
const routerOrder = require('./order')
const routerOrderItem = require('./orderedItem')
const routerCart = require('./cart')
const routerOffer = require('./offer')

const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('thumbnail'))
app.use(bodyParser.json());
app.use('/user',routerUser)
app.use('/customer',routerCustomer)
app.use('/product',routerProduct)
app.use('/order',routerOrder)
app.use('/orderItem',routerOrderItem)
app.use('/cart',routerCart)
app.use('/offer',routerOffer)
app.listen(4000,'0.0.0.0',()=>
{
    console.log("server started on 4000 port")
})