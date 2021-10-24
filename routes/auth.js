const express = require('express')
const router = express.Router()
const axios = require('axios').default

router.post('/', (req, res) => {
    let response = req.body.token
    let response2
    
    axios({
        method: 'POST',
        url:'https://piauthapi.herokuapp.com/auth',
        data: {
            token: response
        }
    }).then(r => response2 = r).catch(error => response2 = error)

    res.send(response2)
})

module.exports = router
