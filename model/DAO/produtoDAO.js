/****************************************************************************
 * Objetivo: Realizar a interação dos Produtos com o Banco de Dados
 * Data: 01/06/2023
 * Autor: Mônica
 * Versão: 1.0
 ****************************************************************************/

var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const selectAllProdutos = async function () {

    let sql = 'select * from tbl_produto';

    let rsProduto = await prisma.$queryRawUnsafe(sql);

    if (rsProduto.length > 0)
        return rsProduto;
    else
        return false;

}


module.exports = {
    selectAllProdutos,


}