const express = require('express')
const routes = express.Router()
const googleSheetsAPI = require('../gateway/sheets_gateway')
const axios = require('axios').default

routes.post('/', async (req, res) => { 

    let response = req.body.token

    let responseStatus = axios({
        method: 'POST',
        url:'https://piauthapi.herokuapp.com/auth',
        data: {
            token: response
        }
    }).then(r => r.data.status)
      .catch(error => error)

    if(responseStatus == 200) {
        await googleSheetsAPI(req.body)
        .then((data) => res.send(data.data)).catch(
            function(error) {
                res.status(500)
                res.send(error)
            }
        )
    } else {
        res.send(responseStatus)
    }
})

module.exports = routes