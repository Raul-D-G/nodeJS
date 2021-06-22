const {
  getTrasnportById,
  getTransporturi,
  registerTransport,
  getTransporturiByCompanieId,
  deleteTransport,
  transportEfectuat,
  test,
} = require("./transport.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, registerTransport);
router.post("/camioane", checkToken, test);
router.post("/efectuat", checkToken, transportEfectuat);

router.get("/:id", checkToken, getTransporturiByCompanieId);
router.get("/bursa/:id", checkToken, getTransporturi);
router.get("/transport/:id", checkToken, getTrasnportById);

router.delete("/:id", checkToken, deleteTransport);

module.exports = router;
