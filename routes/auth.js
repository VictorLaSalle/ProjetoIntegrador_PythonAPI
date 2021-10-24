const express = require('express')
const router = express.Router()
// require('../gateway/auth')

router.post('/', (req, res) => {
    let token

    router.post('https://piauthapi.herokuapp.com/auth', (req, res) => token = res)
    res.send(token)
})

module.exports = router