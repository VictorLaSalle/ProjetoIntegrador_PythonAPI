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
    let respostaSim1 = [];
    let respostaNao1 = [];

    let pergunta2 = respostas[0][5]
    let pergunta2Respostas = []
    let respostas2Formatadas = {}
    let respostaSim2 = [];
    let respostaNao2 = [];

    let pergunta3 = respostas[0][6]
    let pergunta3Respostas = []
    let respostas3Formatadas = {}
    let respostaSim3 = [];
    let respostaNao3 = [];

    let pergunta4 = respostas[0][7]
    let pergunta4Respostas = []
    let respostas4Formatadas = {}
    let respostaSim4 = [];
    let respostaNao4 = [];

    let pergunta5 = respostas[0][8]
    let pergunta5Respostas = []
    let respostas5Formatadas = {}
    let respostaSim5 = [];
    let respostaNao5 = [];

    let pergunta6 = respostas[0][9]
    let pergunta6Respostas = []
    let respostas6Formatadas = {}
    let respostaSim6 = [];
    let respostaNao6 = [];

    let pergunta7 = respostas[0][10]
    let pergunta7Respostas = []
    let respostas7Formatadas = {}
    let respostaSim7 = [];
    let respostaNao7 = [];

    let pergunta8 = respostas[0][11]
    let pergunta8Respostas = []
    let respostas8Formatadas = {}
    let respostaSim8 = [];
    let respostaNao8 = [];

    let pergunta9 = respostas[0][12]
    let pergunta9Respostas = []
    let respostas9Formatadas = {}
    let respostaSim9 = [];
    let respostaNao9 = [];

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

    pergunta1Respostas.map((value) => value == "Sim" ? respostaSim1.push(value) : respostaNao1.push(value));
    pergunta2Respostas.map((value) => value == "Sim" ? respostaSim2.push(value) : respostaNao2.push(value));
    pergunta3Respostas.map((value) => value == "Sim" ? respostaSim3.push(value) : respostaNao3.push(value));
    pergunta4Respostas.map((value) => value == "Sim" ? respostaSim4.push(value) : respostaNao4.push(value));
    pergunta5Respostas.map((value) => value == "Sim" ? respostaSim5.push(value) : respostaNao5.push(value));
    pergunta6Respostas.map((value) => value == "Sim" ? respostaSim6.push(value) : respostaNao6.push(value));
    pergunta7Respostas.map((value) => value == "Sim" ? respostaSim7.push(value) : respostaNao7.push(value));
    pergunta8Respostas.map((value) => value == "Sim" ? respostaSim8.push(value) : respostaNao8.push(value));
    pergunta9Respostas.map((value) => value == "Sim" ? respostaSim9.push(value) : respostaNao9.push(value));

    let porcentagemSim1 = (respostaSim1.length / pergunta1Respostas.length) * 100
    let porcentagemSim2 = (respostaSim2.length / pergunta2Respostas.length) * 100
    let porcentagemSim3 = (respostaSim3.length / pergunta3Respostas.length) * 100
    let porcentagemSim4 = (respostaSim4.length / pergunta4Respostas.length) * 100
    let porcentagemSim5 = (respostaSim5.length / pergunta5Respostas.length) * 100
    let porcentagemSim6 = (respostaSim6.length / pergunta6Respostas.length) * 100
    let porcentagemSim7 = (respostaSim7.length / pergunta7Respostas.length) * 100
    let porcentagemSim8 = (respostaSim8.length / pergunta8Respostas.length) * 100
    let porcentagemSim9 = (respostaSim9.length / pergunta9Respostas.length) * 100

    let porcentagemNao1 = (respostaNao1.length / pergunta1Respostas.length) * 100
    let porcentagemNao2 = (respostaNao2.length / pergunta2Respostas.length) * 100
    let porcentagemNao3 = (respostaNao3.length / pergunta3Respostas.length) * 100
    let porcentagemNao4 = (respostaNao4.length / pergunta4Respostas.length) * 100
    let porcentagemNao5 = (respostaNao5.length / pergunta5Respostas.length) * 100
    let porcentagemNao6 = (respostaNao6.length / pergunta6Respostas.length) * 100
    let porcentagemNao7 = (respostaNao7.length / pergunta7Respostas.length) * 100
    let porcentagemNao8 = (respostaNao8.length / pergunta8Respostas.length) * 100
    let porcentagemNao9 = (respostaNao9.length / pergunta9Respostas.length) * 100

    

    respostas1Formatadas[pergunta1] = {
        "sim": porcentagemSim1,
        "nao": porcentagemNao1,
    }
    respostas2Formatadas[pergunta2] = {
        "sim": porcentagemSim2,
        "nao": porcentagemNao2,
    }
    respostas3Formatadas[pergunta3] = {
        "sim": porcentagemSim3,
        "nao": porcentagemNao3,
    }
    respostas4Formatadas[pergunta4] = {
        "sim": porcentagemSim4,
        "nao": porcentagemNao4,
    }
    respostas5Formatadas[pergunta5] = {
        "sim": porcentagemSim5,
        "nao": porcentagemNao5,
    }
    respostas6Formatadas[pergunta6] = {
        "sim": porcentagemSim6,
        "nao": porcentagemNao6,
    }
    respostas7Formatadas[pergunta7] = {
        "sim": porcentagemSim7,
        "nao": porcentagemNao7,
    }
    respostas8Formatadas[pergunta8] = {
        "sim": porcentagemSim8,
        "nao": porcentagemNao8,
    }
    respostas9Formatadas[pergunta9] = {
        "sim": porcentagemSim9,
        "nao": porcentagemNao9,
    }

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
