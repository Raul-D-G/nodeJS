const {
  getTransporturi,
  registerTransport,
  getTransporturiByCompanieId,
  test,
} = require("./transport.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.get("/", checkToken, getTransporturi);
router.post("/", checkToken, registerTransport);
router.get("/:id", checkToken, getTransporturiByCompanieId);

router.post("/camioane", checkToken, test);

module.exports = router;
