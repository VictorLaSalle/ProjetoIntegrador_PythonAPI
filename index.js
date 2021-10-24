const express = require('express')
const dotenv = require('dotenv')

const sheetsAPIRoute = require('./routes/sheetsAPI_route')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/getData', sheetsAPIRoute)

app.listen(process.env.PORT, () => console.log('Escutando'))