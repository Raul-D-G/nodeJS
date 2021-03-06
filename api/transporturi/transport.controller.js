const {
  getTransporturiEfectuate,
  getTrasnportById,
  getTransporturi,
  register,
  getTransporturiByCompanieId,
  deleteTransport,
  transportEfectuat,
  test,
} = require("./transport.service");

module.exports = {
  getTrasnportById: (req, res) => {
    const id = req.params.id;
    getTrasnportById(id, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      return res.json(results);
    });
  },
  getTransporturiEfectuate: (req, res) => {
    const id = req.params.id;
    getTransporturiEfectuate(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },

  getTransporturi: (req, res) => {
    const id = req.params.id;
    getTransporturi(id, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      return res.status(200).json(results);
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

  deleteTransport: (req, res) => {
    const id = req.params.id;
    deleteTransport(id, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Inregistrarea nu afost gasita",
        });
      }
      return res.json({
        success: 1,
        message: "Transport sters",
      });
    });
  },

  transportEfectuat: (req, res) => {
    const body = req.body;
    transportEfectuat(body, (err, results) => {
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

  test: (req, res) => {
    const body = req.body;
    test(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json({
        succesc: 1,
        message: results,
      });
    });
  },
};
