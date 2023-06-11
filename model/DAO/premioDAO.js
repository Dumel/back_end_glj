var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient();

const selectPremioByTipoPremio = async function(idTipoPremio) {
    
    let sql = `select * from tbl_premio where id_tipo_premio = ${idTipoPremio}`

    

    let rsPremios = await prisma.$queryRawUnsafe(sql);

    if (rsPremios.length > 0)
    return rsPremios;
        else
    return false;
}

module.exports = {
    selectPremioByTipoPremio
}