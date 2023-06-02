var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const selectConteudoByMateria = async function(idMateria) {

    let sql = `select * from tbl_conteudo where id_materia = ${idMateria};`

    let rsConteudo = await prisma.$queryRawUnsafe(sql);

    if (rsConteudo.length > 0)
        return rsConteudo;
    else
        return false;
}

module.exports = {
    selectConteudoByMateria
}