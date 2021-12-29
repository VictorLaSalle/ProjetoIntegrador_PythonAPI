const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const sheetsAPIRoute = require('./routes/sheetsAPI_route')

dotenv.config()
const app = express()
//
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/getData', sheetsAPIRoute)

app.use

app.listen(process.env.PORT, () => console.log('Escutando'))
