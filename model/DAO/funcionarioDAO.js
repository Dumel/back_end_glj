var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const insertFuncionario = async function(dados) {

    let sql = `insert into tbl_funcionario 
                (nome, 
                cpf,
                email,
                senha)
                values
                ('${dados.nome}',
                '${dados.cpf}',
                '${dados.email}',
                '${dados.senha}')`

    let rsFuncionario = await prisma.$queryRawUnsafe(sql)

    if (rsFuncionario) {
        console.log(rsFuncionario);

        return rsFuncionario

    } else {
        return false
    }
}

const selectAllFuncionario = async function() {

    let sql = `select * from tbl_funcionario`


    let rsFuncionarios = await prisma.$queryRawUnsafe(sql)

    if (rsFuncionarios.length > 0)
        return rsFuncionarios
    else
        return false
}

const selectByIdFuncionario = async function(idFuncionario) {
    let sql = `select * from tbl_funcionario where id = ${idFuncionario}`

    let rsFuncionario = await prisma.$queryRawUnsafe(sql)

    if (rsFuncionario.length > 0)
        return rsFuncionario
    else
        return false
}

const deleteFuncionario = async function(idFuncionario) {

    let sql = `DELETE FROM tbl_Funcionario WHERE id= ${idFuncionario};`
    console.log("DAO", sql);

    let rsFuncionarios = await prisma.$queryRawUnsafe(sql);
    if (rsFuncionarios)
        return true;
    else
        return false;
}

const updateFuncionario = async function(idEscola, dados) {

    let sql = `UPDATE tbl_funcionario SET nome = '${dados.nome}', cpf = '${dados.cpf}', email = '${dados.email}', senha = '${dados.senha}'`
    console.log(sql);


    let rsFuncionarios = await prisma.$queryRawUnsafe(sql);
    console.log(rsFuncionarios);
    if (rsFuncionarios)
        return rsFuncionarios;
    else
        return false;
}

module.exports = {
    insertFuncionario,
    selectAllFuncionario,
    selectByIdFuncionario,
    deleteFuncionario,
    updateFuncionario

}