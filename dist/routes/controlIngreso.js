"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controlIngresoController = require("../controllers/controlIngresoController");

var router = (0, _express.Router)();
router.get("/ingreso", _controlIngresoController.getIngresos);
router.get("/ingreso/count", _controlIngresoController.getIngresosCount); // ruta ingreso agrupado por id_colaborador

router.get("/ingreso/colaboradores", _controlIngresoController.getIngresoColaboradores);
router.post("/ingreso", _controlIngresoController.saveIngreso);
router.get("/ingreso/:id", _controlIngresoController.getIngreso); // último registro

router.get("/ingreso/ultimoregistro/:id", _controlIngresoController.getUltimoRegistro);
router["delete"]("/ingreso/:id", _controlIngresoController.deleteIngreso);
router.put("/ingreso/:id", _controlIngresoController.updateIngreso);
var _default = router;
exports["default"] = _default;