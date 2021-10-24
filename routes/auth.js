const express = require('express')
const router = express.Router()
require('../gateway/auth')

router.post('/', (req, res) => {
    let token = req.body.token

    let response = reqt(token)
    res.send(response)
})

module.exports = router