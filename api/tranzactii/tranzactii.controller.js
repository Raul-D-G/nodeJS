const { create } = require("./tranzactii.service");

module.exports = {
  createTranzactie: (req, res) => {
    const body = req.body;
    console.log("AAAA");
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json({
        succesc: 1,
        messaage: results,
      });
    });
  },
};
