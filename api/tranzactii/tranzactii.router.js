const {
  createTranzactie,
  deleteTranzactie,
  getTranzactiiByExpeditorId,
} = require("./tranzactii.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createTranzactie);
router.delete("/:id", checkToken, deleteTranzactie);
router.get("/:id", checkToken, getTranzactiiByExpeditorId);

module.exports = router;
