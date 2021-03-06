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

  deleteTranzactie: (id, callBack) => {
    pool.query(
      `DELETE FROM tranzactietransport
                WHERE idTransport = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  getTranzactiiByExpeditorId: (id, callBack) => {
    pool.query(
      `SELECT idTransport, idTransportator, idExpeditor
            FROM tranzactietransport
              WHERE idExpeditor = ? `,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
