const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.get('/', (req, res) => {
    res.send("HELLO form NODE API")
})

app.post('/api/products', (req, res) => {
    console.log(req.body)
    res.send(req.body)
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