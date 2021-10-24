// const request = require('request')
// require('../environment')


// function setRequestOptions(b) {
//     return {
//         url: 'https://piauthapi.herokuapp.com/auth',
//         method: 'POST',
//         json: b
//     }
// }

// module.exports = reqt = async (body) => {
//     let response

//     await request(setRequestOptions(body), (err, res, bdy) => {
//         response = res.body
//         console.log(err)
//         console.log(res)
//         console.log(body)
//     })

//     return response
// }