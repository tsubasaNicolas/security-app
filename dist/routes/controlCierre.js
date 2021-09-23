"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controlCierreController = require("../controllers/controlCierreController");

var router = (0, _express.Router)();
router.get("/cierre", _controlCierreController.getCierres);
router.get("/cierre/count", _controlCierreController.getCierresCount); // ruta ingreso agrupado

router.get("/cierre/locales", _controlCierreController.getCierreLocales);
router.post("/cierre", _controlCierreController.saveCierre);
router.get("/cierre/:id", _controlCierreController.getCierre);
router["delete"]("/cierre/:id", _controlCierreController.deleteCierre);
router.put("/cierre/:id", _controlCierreController.updateCierre);
var _default = router;
exports["default"] = _default;