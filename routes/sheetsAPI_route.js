const express = require('express')
const routes = express.Router()
const googleSheetsAPI = require('../gateway/sheets_gateway')
const axios = require('axios').default

routes.post('/', async (req, res) => { 

    let response = req.body.token

    axios({
        method: 'POST',
        url:'https://piauthapi.herokuapp.com/auth',
        data: {
            token: response
        }
    }).then(
        async _ => await googleSheetsAPI(req.body)
        .then((data) => res.send(data)).catch(
            (error) => {
                console.log(error)
                res.status(500)
                res.send(error)
            }
        ) 
    )
    .catch(error => res.send(error))
})

module.exports = routes