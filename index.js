const express = require('express')
const dotenv = require('dotenv')

const sheetsAPIRoute = require('./routes/sheetsAPI_route')
const auth = require('./routes/auth')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/getData', sheetsAPIRoute)
app.use('/auth', auth)

app.listen(process.env.PORT, () => console.log('Escutando'))