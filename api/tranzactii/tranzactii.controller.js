const {
  create,
  deleteTranzactie,
  getTranzactiiByExpeditorId,
} = require("./tranzactii.service");

module.exports = {
  createTranzactie: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          succesc: 0,
          message: "Pentru acest transport este o tranzactie in curs",
        });
      }
      return res.status(200).json({
        succesc: 1,
        message: "Tranzactia a fost inregistrata",
      });
    });
  },

  deleteTranzactie: (req, res) => {
    const id = req.params.id;
    deleteTranzactie(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        succesc: 1,
        message: "Tranzacție ștearsă",
      });
    });
  },
  getTranzactiiByExpeditorId: (req, res) => {
    const idExpeditor = req.params.id;
    getTranzactiiByExpeditorId(idExpeditor, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (typeof results !== "undefined" && results.length > 0) {
        return res.json(results);
      }
      return res.json([]);
    });
  },
};
