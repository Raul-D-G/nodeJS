const pool = require("../../config/database");


module.exports = {


    getTransporturi: callBack => {
        pool.query(
            `SELECT id, taraIncarcare, orasIncarcare, taraDescarcare, orasDescarcare, pret, km
            FROM transporturi`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

}