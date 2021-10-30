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

    let data = await sheets.spreadsheets.values.get(
        {
            spreadsheetId: credentials.spreadsheetID,
            range: 'data'
        }
    )

    let respostas = data.data.values
    let qtdeRespostas = data.data.values.length

    let pergunta1 = respostas[0][4]
    let pergunta1Respostas = []
    let respostas1Formatadas = {}

    let pergunta2 = respostas[0][5]
    let pergunta2Respostas = []
    let respostas2Formatadas = {}

    let pergunta3 = respostas[0][6]
    let pergunta3Respostas = []
    let respostas3Formatadas = {}

    let pergunta4 = respostas[0][7]
    let pergunta4Respostas = []
    let respostas4Formatadas = {}

    let pergunta5 = respostas[0][8]
    let pergunta5Respostas = []
    let respostas5Formatadas = {}

    let pergunta6 = respostas[0][9]
    let pergunta6Respostas = []
    let respostas6Formatadas = {}

    let pergunta7 = respostas[0][10]
    let pergunta7Respostas = []
    let respostas7Formatadas = {}

    let pergunta8 = respostas[0][11]
    let pergunta8Respostas = []
    let respostas8Formatadas = {}

    let pergunta9 = respostas[0][12]
    let pergunta9Respostas = []
    let respostas9Formatadas = {}

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta1Respostas.push(respostas[i][4]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta2Respostas.push(respostas[i][5]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta3Respostas.push(respostas[i][6]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta4Respostas.push(respostas[i][7]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta5Respostas.push(respostas[i][8]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta6Respostas.push(respostas[i][9]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta7Respostas.push(respostas[i][10]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta8Respostas.push(respostas[i][11]) 
    }

    for(let i = 1; i < qtdeRespostas; i++) {
        pergunta9Respostas.push(respostas[i][12]) 
    }

    respostas1Formatadas[pergunta1] = pergunta1Respostas
    respostas2Formatadas[pergunta2] = pergunta2Respostas
    respostas3Formatadas[pergunta3] = pergunta3Respostas
    respostas4Formatadas[pergunta4] = pergunta4Respostas
    respostas5Formatadas[pergunta5] = pergunta5Respostas
    respostas6Formatadas[pergunta6] = pergunta6Respostas
    respostas7Formatadas[pergunta7] = pergunta7Respostas
    respostas8Formatadas[pergunta8] = pergunta8Respostas
    respostas9Formatadas[pergunta9] = pergunta9Respostas

    return {
        respostas1Formatadas,
        respostas2Formatadas,
        respostas3Formatadas,
        respostas4Formatadas,
        respostas5Formatadas,
        respostas6Formatadas,
        respostas7Formatadas,
        respostas8Formatadas,
        respostas9Formatadas,
    }
   

}
