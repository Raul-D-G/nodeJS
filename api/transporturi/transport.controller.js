const {
  getTransporturi,
  register,
  getTransporturiByCompanieId,
} = require("./transport.service");

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
  getTransporturiByCompanieId: (req, res) => {
    const id = req.params.id;
    getTransporturiByCompanieId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (typeof results !== "undefined" && results.length > 0) {
        return res.json(results);
      }
      return res.json({
        success: 0,
        message: "Compania nu are transporturi inregistrate",
      });
    });
  },
};
