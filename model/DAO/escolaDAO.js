var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const insertSchool = async function(dados){
    let sql = `insert into tbl_escola (
            nome,
            telefone,
            email,
            data_aplicacao,
            hora_aplicacao,
            pontuacao,
            senha)
            
            values
            (   '${dados.nome}'
                '${dados.telefone}',
                '${dados.email}',
                '${dados.data_aplicacao}',
                '${dados.hora_aplicacao}',
                '${dados.pontuacao}',
                '${dados.senha}'
            )`


                console.log(sql);
                //Executa o script SQL no BD e recebemos o retorno se deu certo ou não
                let result = await prisma.$executeRawUnsafe(sql)
            console.log(result);
                if(result)
                    return true
            
                else
                    return false
                

}
const selectAllSchool = async function () {

    let sql = `select * from tbl_escola`



    let rsEscolas = await prisma.$queryRawUnsafe(sql);

    if (rsEscolas.length > 0)
        return rsEscolas;
    else
        return false;
}

const selectSchoolById = async function (idEscola) {

    let sql = `select * from tbl_escola where id = ${idEscola};`



    let rsEscolas = await prisma.$queryRawUnsafe(sql);

    if (rsEscolas.length > 0)
        return rsEscolas;
    else
        return false;
};
const login = async function(dados){
    let sql = `select * from tbl_escola where email = '${dados.email}' and senha = '${dados.senha}';`

    let rsEscolas = await prisma.$queryRawUnsafe(sql);
    if (rsEscolas.length > 0)
        return rsEscolas;
    else
        return false;

};

const deleteSchool = async function (idEscola) {

    let sql = `DELETE FROM tbl_escola WHERE id= ${idEscola};`
    console.log("DAO", sql);

    let rsEscolas = await prisma.$queryRawUnsafe(sql);
    if (rsEscolas)
        return true;
    else
        return false;
}

const updateSchool = async function (idEscola,dados) {

    let sql = `UPDATE tbl_escola SET nome = '${dados.nome}', telefone = '${dados.telefone}', email = '${dados.email}', data_aplicacao = '${dados.data_aplicacao}', hora_aplicacao = '${dados.hora_aplicacao}', pontuacao = '${dados.pontuacao}', senha = '${dados.senha}'  WHERE id= ${idEscola};`
    console.log(sql);


    let rsEscolas = await prisma.$queryRawUnsafe(sql);
    console.log(rsEscolas);
    if (rsEscolas)
        return rsEscolas;
    else
        return false;
}



const selectLastId = async function(){

    //Script 
    let sql = `select id from tbl_escola order by id desc limit 1`

    let rsEscola = await prisma.$queryRawUnsafe(sql)

    if(rsEscola.length > 0)
        return rsEscola[0].id
    else
        return false
}



module.exports = {
    selectAllSchool,
    selectSchoolById,
    deleteSchool,
    updateSchool,
    login,
    insertSchool,
    selectLastId
}