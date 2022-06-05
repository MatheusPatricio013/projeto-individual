var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/enviarPontos", function (req, res) {
    medidaController.enviarPontos(req, res);
})

module.exports = router;