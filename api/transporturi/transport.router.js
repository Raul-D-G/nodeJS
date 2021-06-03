const {
  getTransporturi,
  registerTransport,
  getTransporturiByCompanieId,
  deleteTransport,
  test,
} = require("./transport.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.get("/bursa/:id", checkToken, getTransporturi);
router.post("/", checkToken, registerTransport);
router.get("/:id", checkToken, getTransporturiByCompanieId);
router.delete("/:id", checkToken, deleteTransport);

router.post("/camioane", checkToken, test);

module.exports = router;
