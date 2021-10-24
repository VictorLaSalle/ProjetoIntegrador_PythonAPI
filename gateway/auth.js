const request = require('request')
require('../environment')

module.exports = reqt = () => {
    let response
    
    request.post(`${hostname}${endpointAuth}`, function(err, res, body) { response = res })
    
    return response
}
