/***********************************************************
 * Objetivo: Implementar a regra de negócio entre o app e a model
 * Data: 01/06/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// import do arquivo de acesso ao BD
const produtoDAO = require('../model/DAO/produtoDAO.js');
const materiaDAO = require('../model/DAO/materiaDAO.js')


const message = require('./modulo/config.js')


const selecionarTodosProdutos = async function() {

    let dadosProdutos = await produtoDAO.selectAllProdutos()

    let dadosJson = {}

    if (dadosProdutos) {
        dadosJson.status = 200
        dadosJson.count = dadosProdutos.length
        dadosJson.produtos = dadosProdutos
        return dadosJson
    } else {
        return message.ERROR_NOT_FOUND
    }
}

const selecionarTodasMateria = async function() {

    let dadosMateria = await materiaDAO.selectAllMaterias()

    let dadosJson = {}

    if (dadosMateria) {
        dadosJson.status = 200
        dadosJson.count = dadosMateria.length
        dadosJson.materia = dadosMateria
        return dadosJson
    } else {
        return message.ERROR_NOT_FOUND
    }
}

module.exports = {
    selecionarTodosProdutos,
    selecionarTodasMateria
}