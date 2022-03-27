"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _require = require("../controllers/imagenesController"),
    getImagenes = _require.getImagenes,
    saveImagenes = _require.saveImagenes,
    fileUpload = _require.fileUpload,
    deleteImagen = _require.deleteImagen;

var router = (0, _express.Router)();
router.get("/imagenes", getImagenes);
router.post("/imagenes", fileUpload, saveImagenes);
router["delete"]("/imagenes/:id", deleteImagen); //export default router

var _default = router;
exports["default"] = _default;