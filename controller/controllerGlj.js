/***********************************************************
 * Objetivo: Implementar a regra de negócio entre o app e a model
 * Data: 01/06/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// import do arquivo de acesso ao BD
const produtoDAO = require('../model/DAO/produtoDAO.js');
const materiaDAO = require('../model/DAO/materiaDAO.js');
const conteudoDAO = require('../model/DAO/conteudoDAO.js')
const premioDAO = require('../model/DAO/premioDAO.js');
const tipoPremioDAO = require('../model/DAO/tipoPremioDAO.js');
const escolaDAO = require('../model/DAO/escolaDAO.js');


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
};

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
};

const selecionarConteudoPelaMateria = async function(idMateria){

    if (idMateria == '' || idMateria == undefined || isNaN(idMateria))
        return message.ERROR_REQUIRED_ID
    else {
        // Solicita ao DAO todos os alunos do BD
        let dadosConteudo = await conteudoDAO.selectConteudoByMateria(idMateria);

        // cria um objeto do tipo JSON
        let dadosJSON = {};

        // valida se o BD teve registros
        if (dadosConteudo) {
            // Adiciona o array de alunos e um JSON para retornar ao app
            dadosJSON.status = 200;
            dadosJSON.conteudo = dadosConteudo
            return dadosJSON
        } else {
            return message.ERROR_NOT_FOUND;
        }
    }

};

const selecionarTipoPremio = async function() {
    let dadosTipoPremio = await tipoPremioDAO.selectTipsPremio()

    let dadosJSON = {}

    if (dadosTipoPremio) {
        dadosJSON.status = 200
        dadosJSON.count = dadosTipoPremio.length
        dadosJSON.tipoPremio = dadosTipoPremio
        return dadosJSON
        }else{
            return message.ERROR_NOT_FOUND
        }
};

const selecionarPremioPeloTipo = async function(idTipoPremio) {
    if (idTipoPremio == '' || idTipoPremio  == undefined || isNaN(idTipoPremio ))
        return message.ERROR_REQUIRED_ID
    else {
        // Solicita ao DAO todos os alunos do BD
        let dadosPremios = await premioDAO.selectPremioByTipoPremio(idTipoPremio);

        // cria um objeto do tipo JSON
        let dadosJSON = {};

        // valida se o BD teve registros
        if (dadosPremios) {
            // Adiciona o array de alunos e um JSON para retornar ao app
            dadosJSON.status = 200;
            dadosJSON.premios = dadosPremios
            return dadosJSON
        } else {
            return message.ERROR_NOT_FOUND;
        }
    }
};

const selecionarTodasEscolas = async function() {

    let dadosEscolas = await materiaDAO.selectAllMaterias()

    let dadosJson = {}

    if (dadosEscolas) {
        dadosJson.status = 200
        dadosJson.count = dadosEscolas.length
        dadosJson.escola = dadosEscolas
        return dadosJson
    } else {
        return message.ERROR_NOT_FOUND
    }
};

const selecionarEscolaPeloId = async function(idEscola) {

    let dadosEscolas = await escolaDAO.selectSchoolById(idEscola)

    let dadosJson = {}

    if (dadosEscolas) {
        dadosJson.status = 200
        dadosJson.count = dadosEscolas.length
        dadosJson.escola = dadosEscolas
        return dadosJson
    } else {
        return message.ERROR_NOT_FOUND
    }
};

const deletarEscola = async function(idEscola) {
    if(idEscola){
        let dadosEscolas = await escolaDAO.deleteSchool(idEscola)

        if (dadosEscolas) {
            return message.DELETED_ITEM
        } else {
            return message.ERROR_NOT_FOUND
        }
    }else{
        return message.ERROR_REQUIRED_ID
    }
};

const inserirEscola = async function(dados) {
    
    let dadosEscolas = await escolaDAO.insertSchool(dados)


    if (dadosEscolas) {
        return message.CREATED_ITEM
    } else {
        return message.ERROR_REQUIRED_DATA
    }
    
};

const atualizarEscola = async function(idEscola,dados) {
    
    let dadosEscolas = await escolaDAO.updateSchool(idEscola,dados)

    let dadosJson = {}

    if (dadosEscolas) {
        dadosJson.status = 200
        dadosJson.escola = dadosEscolas
        return dadosJson
    } else {
        return message.ERROR_REQUIRED_DATA
    }
    
};

const loginEscola = async function(dados) {
    let dadosEscolas = await escolaDAO.login(dados)
    if (dadosEscolas) {
        return dadosEscolas
    } else {
        return message.ERROR_INTERNAL_SERVER
    }
    
};









module.exports = {
    selecionarTodosProdutos,
    selecionarTodasMateria,
    selecionarConteudoPelaMateria,
    selecionarPremioPeloTipo,
    selecionarTipoPremio,
    selecionarTodasEscolas,
    selecionarEscolaPeloId,
    atualizarEscola,
    inserirEscola,
    deletarEscola,
    loginEscola
}