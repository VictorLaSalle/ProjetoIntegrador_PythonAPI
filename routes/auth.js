const express = require('express')
const router = express.Router()
const axios = require('axios').default

router.post('/', (req, res) => {
    let response = req.body.token
    
    axios({
        method: 'POST',
        url:'https://piauthapi.herokuapp.com/auth',
        data: {
            token: response
        }
    }).then(r => res.send(r)).catch(error => res.send(error))
})

module.exports = router
