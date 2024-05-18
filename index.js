const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json())
// Middleware to parse form data
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("HELLO form NODE API")
})

app.get('/api/products', async (req, res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

app.get('/api/product/:id', async (req, res) => {
    try{
        const id = req.params.id
        const products = await Product.findById(id)
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

// update a product
app.put('/api/product/:id', async(req, res) => {
    try{
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
        if(!product){
            res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

// delete a product
app.delete('/api/product/:id', async(req, res) => {
    try{
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message: "Product not found"})
        }
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