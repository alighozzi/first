const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const exerciceRouter = require('./routes/exercice')
const userRouter = require('./routes/user')


require ('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log(' Mongoose data base connection is established successfully')
})

app.use('/exercices', exerciceRouter)
app.use('/users', userRouter)

app.listen(port, () =>{
    console.log(' server is runnning')
}) 

