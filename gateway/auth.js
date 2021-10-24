const request = require('request')
require('../environment')


function setRequestOptions(b) {
    return {
        url: 'https://piauthapi.herokuapp.com/auth',
        method: 'POST',
        json: b
    }
}

module.exports = reqt = (body) => request(setRequestOptions(body), (err, res, bdy) => bdy)