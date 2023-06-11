var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient()

const selectTypePremio = async function(){
    let sql = 'select * from tbl_tipo_premio'

    let rsTipoPremio = await prisma.$queryRawUnsafe(sql);

    if (rsTipoPremio.length > 0)
        return rsTipoPremio;
    else
        return false;
}

module.exports = {
    selectTypePremio
}