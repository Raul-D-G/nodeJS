const pool = require("../../config/database");

module.exports = {
  getTransporturi: (callBack) => {
    pool.query(
      `SELECT id, tipMarfa, taraIncarcare, orasIncarcare, taraDescarcare, orasDescarcare, pret, km
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
  register: (data, callBack) => {
    pool.query(
      `INSERT INTO transporturi(idExpeditor, tipMarfa, taraIncarcare, orasIncarcare, taraDescarcare, orasDescarcare, pret, km)
                    VALUES(?,?,?,?,?,?,?,?)`,
      [
        data.idCompanie,
        data.tipMarfa,
        data.incarcare[1],
        data.incarcare[0],
        data.descarcare[1],
        data.descarcare[0],
        data.pret,
        data.km,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
