/**************************************************************************
 * Objetivo: API para interagir com Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 26/05/2023
 * Autor: Mônica
 * Versão: 1.0
 **************************************************************************/

// Import das bibliotecas do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { request } = require('express');

//Cria o objeto app utilizando a classe do express
const app = express();


//Configura as permissões do cors
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');

    // Permissões de metodos que serão utilizados na API
    response.header('Acess-Controll-Allow-Methods', 'GET , POST , PUT , DELETE , OPTIONS')

    // Define as permissões para o cors
    app.use(cors());

    // Continua para a leitura dos EndPoints
    next();
});

const bodyJSON = bodyParser.json();

const controllerGlj = require('./controller/controllerGlj.js')
const message = require('./controller/modulo/config.js')

app.get('/v1/glj-corporation/produtos', cors(), async function(request, response) {

    let dados = await controllerGlj.selecionarTodosProdutos();

    response.status(dados.status);
    response.json(dados);

})

app.get('/v1/glj-corporation/materia', cors(), async function(request, response) {

    let dados = await controllerGlj.selecionarTodasMateria();

    response.status(dados.status);
    response.json(dados);

})

app.get('/v1/glj-corporation/materia/conteudo/:idMateria', cors(), async function(request, response) {

    let id = request.params.idMateria;

    let dados = await controllerGlj.selecionarConteudoPelaMateria(id);

    response.status(dados.status);
    response.json(dados);

})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080')
});