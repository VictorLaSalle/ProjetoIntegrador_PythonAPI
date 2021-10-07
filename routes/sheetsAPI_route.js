const express = require('express')
const googleSheetsAPI = require('../gateway/sheets_gateway')

const routes = express.Router()

routes.get('/', async (req, res) => { 
    await googleSheetsAPI(req.body)
        .then((data) => res.send(data.data)).catch(
            function(error) {
                res.status(500)
                res.send(error)
            }
        )
})

module.exports = routes