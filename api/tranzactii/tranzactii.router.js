const { createTranzactie } = require("./tranzactii.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createTranzactie);

module.exports = router;
