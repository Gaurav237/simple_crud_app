const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// middlewares
app.use(express.json())
// Middleware to parse form data
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("HELLO form NODE API")
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