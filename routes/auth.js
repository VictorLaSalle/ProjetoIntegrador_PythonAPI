const express = require('express')
const router = express.Router()
require('../gateway/auth')

router.post('/', (req, res) => {
    let response = reqt()
    res.send(response)
})

module.exports = router