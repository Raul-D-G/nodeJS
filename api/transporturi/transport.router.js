const { getTransporturi } = require("./transport.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require('express').Router();


router.get("/", checkToken, getTransporturi);


module.exports = router;