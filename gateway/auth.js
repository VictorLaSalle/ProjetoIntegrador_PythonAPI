const request = require('request')
require('../environment')

module.exports = reqt = () => request.post(`${hostname}${endpointAuth}`)

