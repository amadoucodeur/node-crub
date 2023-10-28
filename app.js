const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const app = express()

connectDB()

// app.use(express.json())
// app.use(express.urlencoded())

app.get('/', (req, res)=>{
    res.json({message: 'coucou'})
})

app.use('/post', require('./routes/post.routes'))

app.listen(3000, ()=>{
    console.log("server running...")
})