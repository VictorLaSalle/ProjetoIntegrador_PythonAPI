const request = require('request')
require('../environment')

module.exports = reqt = () => {
    let response
    
    request.post(`${hostname}${endpointAuth}`, (err, res, body) => response = res)
    
    return response
}
