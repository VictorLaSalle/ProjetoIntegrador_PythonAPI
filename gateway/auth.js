const request = require('request')
require('../environment')


function setRequestOptions(b) {
    return {
        url: 'https://piauthapi.herokuapp.com/auth',
        method: 'POST',
        json: b
    }
}

module.exports = reqt = (body) => {
    let response

    request(setRequestOptions(body), (err, res, bdy) => response = bdy)

    return response
}