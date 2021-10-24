const google = require('googleapis')
const credentials = require('../private.json')

module.exports = async function getData(body) {

    const jwt = new google.Auth.JWT(
        credentials.client_email,
        null,
        body.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    )

    const sheets = google.google.sheets({
        version: 'v4',
        auth: jwt
    })

    jwt.authorize((err) => err ? console.log(err) : console.log("Autenticado SheetsAPI"))

    return await sheets.spreadsheets.values.get(
        {
            spreadsheetId: credentials.spreadsheetID,
            range: 'data'
        }
    )
}
