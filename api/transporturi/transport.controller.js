const { getTransporturi, register } = require("./transport.service");

const { sign } = require("jsonwebtoken");

module.exports = {
  getTransporturi: (req, res) => {
    getTransporturi((err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      return res.json(results);
    });
  },

  registerTransport: (req, res) => {
    const body = req.body;
    register(body, (err, results) => {
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
