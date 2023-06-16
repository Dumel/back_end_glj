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
app.use(cors());
app.use(bodyParser.json());

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

const controllerGlj = require('./controller/controllerGlj.js')
const message = require('./controller/modulo/config.js')

app.get('/v1/glj-corporation/produtos', async function(request, response) {

    let dados = await controllerGlj.selecionarTodosProdutos();

    response.status(dados.status);
    response.json(dados);

});

app.get('/v1/glj-corporation/materia', async function(request, response) {

    let dados = await controllerGlj.selecionarTodasMateria();

    response.status(dados.status);
    response.json(dados);

});

app.get('/v1/glj-corporation/materia/conteudo/:idMateria', async function(request, response) {

    let id = request.params.idMateria;

    let dados = await controllerGlj.selecionarConteudoPelaMateria(id);

    response.status(dados.status);
    response.json(dados);

});

app.get('/v1/glj-corporation/tipoPremio', async function(request, response) {

    let dados = await controllerGlj.selecionarTipoPremio();

    response.status(dados.status);
    response.json(dados);
});

app.get('/v1/glj-corporation/tipoPremio/premio/:idTipoPremio', async function(request, response) {
    let id = request.params.idTipoPremio;

    let dados = await controllerGlj.selecionarPremioPeloTipo(id);

    response.status(dados.status);
    response.json(dados);

});

app.post('/v1/glj-corporation/escola', async function(request, response) {

    let contentType = request.headers['content-type']
    
    if (String (contentType).toLowerCase() == 'application/json') {
    

    //Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body

   

    let resultInsertDados = await controllerGlj.inserirEscola(dadosBody)

    console.log(resultInsertDados);

    //Retorna o status code e a message
    response.status(resultInsertDados.status)
    response.json(resultInsertDados)

    }else{
        response.status(message.ERROR_CONTENT_TYPE.status)
        response.json(message.ERROR_CONTENT_TYPE)
    }




    // let contentType = request.headers['content-type'];

    // if (String(contentType).toLowerCase() == 'application/json') {

    //     let dadosBody = request.body;

    //     let resultInsertDados = await controllerGlj.inserirEscola(dadosBody);

    //     response.status(resultInsertDados.status);
    //     response.json(resultInsertDados)
    // } else {
    //     response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
    //     response.json(message.ERROR_INVALID_CONTENT_TYPE)
    // }
});

app.post('/v1/glj-corporation/escola/login', async function(request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {

        let dadosBody = request.body;
        console.log(dadosBody);
        let resultInsertDados = await controllerGlj.loginEscola(dadosBody);
        if (resultInsertDados.length > 0) {
            resultInsertDados.status = 200;
        }

        response.status(resultInsertDados.status);
        response.json(resultInsertDados)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
});

app.put('/v1/glj-corporation/escola/:id', async function(request, response) {

    let dadosBody = request.body;

    let idEscola = request.params.id;

    let resultUpdateDados = await controllerGlj.atualizarEscola(idEscola, dadosBody);
    if (resultUpdateDados.length > 0) {
        resultUpdateDados.status = 200;
    }
    response.status(resultUpdateDados.status);
    response.json(resultUpdateDados)

});

app.delete('/v1/glj-corporation/escola/:id', async function(request, response) {

    let idEscola = request.params.id;

    let resultDeleteDados = await controllerGlj.deletarEscola(idEscola)
    console.log(resultDeleteDados);

    // response.status(resultDeleteDados.status);
    response.json(resultDeleteDados);

});

app.get('/v1/glj-corporation/escola', async function(request, response) {

    let dados = await controllerGlj.selecionarTodasEscolas();

    response.status(dados.status);
    response.json(dados);

});

app.get('/v1/glj-corporation/escola/:id', async function(request, response) {

    let idEscola = request.params.id;

    let dados = await controllerGlj.selecionarEscolaPeloId(idEscola);

    response.status(dados.status);
    response.json(dados);

});

app.post('/v1/glj-corporation/funcionario', async function(request, response) {

    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json') {
        let dadosBody = request.body

        let resultInsertFuncionario = await controllerGlj.inserirFuncionario(dadosBody)

        response.status(resultInsertFuncionario.status);
        response.json(resultInsertFuncionario)

    } else {

        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
})

app.get('/v1/glj-corporation/funcionario', async function(request, response) {
    let dados = await controllerGlj.selecionarTodosFuncionarios()

    response.status(dados.status)
    response.json(dados)
})



app.get('/v1/glj-corporation/funcionario/:id', async function(request, response) {

    let idFuncionario = request.params.id

    let dados = await controllerGlj.selecionarFuncionarioPeloId(idFuncionario)

    response.status(dados.status)
    response.json(dados)
})

app.delete('/v1/glj-corporation/funcionario/:id', async function(request, response) {

    let idFuncionario = request.params.id;

    let resultDeleteDados = await controllerGlj.deletarFuncionario(idFuncionario)
    console.log(resultDeleteDados);

    // response.status(resultDeleteDados.status);
    response.json(resultDeleteDados);

});

app.put('/v1/glj-corporation/funcionario/:id', async function(request, response) {

    let dadosBody = request.body;

    let idFuncionario = request.params.id;

    let resultUpdateDados = await controllerGlj.atualizarFuncionario(idFuncionario, dadosBody);
    if (resultUpdateDados.length > 0) {
        resultUpdateDados.status = 200;
    }
    response.status(resultUpdateDados.status);
    response.json(resultUpdateDados)

});






app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080')
});