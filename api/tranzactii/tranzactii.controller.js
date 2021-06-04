const { create } = require("./tranzactii.service");

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
};
