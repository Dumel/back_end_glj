var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const selectAllMaterias = async function() {
    let sql = 'select * from tbl_materia'

    let rsMateria = await prisma.$queryRawUnsafe(sql);

    if (rsMateria.length > 0)
        return rsMateria;
    else
        return false;
}

module.exports = {
    selectAllMaterias
}