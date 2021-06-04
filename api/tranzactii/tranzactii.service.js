const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO tranzactietransport(idTransport, idTransportator, idExpeditor)
                    VALUES(?,?,?)`,
      [data.idTransport, data.idTransportator, data.idExpeditor],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
