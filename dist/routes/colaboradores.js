"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _colaboradoresController = require("../controllers/colaboradoresController");

var router = (0, _express.Router)();
router.get("/colaboradores", _colaboradoresController.getColaboradores);
router.get("/colaboradores/count", _colaboradoresController.getColaboradoresCount);
router.post("/colaboradores", _colaboradoresController.saveColaborador);
router.get("/colaboradores/:id", _colaboradoresController.getColaborador);
router["delete"]("/colaboradores/:id", _colaboradoresController.deleteColaborador);
router.put("/colaboradores/:id", _colaboradoresController.updateColaborador);
var _default = router;
exports["default"] = _default;