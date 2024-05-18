const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("HELLO form NODE API")
})

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

mongoose.connect('mongodb+srv://gaurav237:9234valorant@backenddb.9a8h9ty.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log("Connected to databse!")
        app.listen(3000, () => {
            console.log(`Server is listening on port: 3000`)
        })
    })
    .catch(() => {
        console.log('Connection failed!')
    })