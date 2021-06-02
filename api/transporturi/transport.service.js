const pool = require("../../config/database");

module.exports = {
  getTransporturi: (callBack) => {
    pool.query(
      `SELECT id, idExpeditor, tipMarfa, taraIncarcare, orasIncarcare, taraDescarcare, orasDescarcare, pret, km
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

  getTransporturiByCompanieId: (id, callBack) => {
    pool.query(
      `SELECT id, idExpeditor, tipMarfa, taraIncarcare, orasIncarcare, taraDescarcare, orasDescarcare, pret, km
            FROM transporturi
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

  test: (data, callBack) => {
    const axios = require("axios");
    axios
      .post(
        "https://track2.cargotrack.ro/gateway/tracking/v20160301/objects/",
        data,
        {
          headers: {
            Authorization: "49e44366-c037-4040-af1d-35f7da16034b",
          },
        }
      )
      .then((res) => {
        // var re = {
        //   lat: res.data.items[0].latitude,
        //   lgn: res.data.items[0].longitude,
        // };
        return callBack(null, res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
