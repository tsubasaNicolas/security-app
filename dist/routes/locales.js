"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _localesController = require("../controllers/localesController");

var router = (0, _express.Router)();
router.get("/locales", _localesController.getLocales);
router.get("/locales/count", _localesController.getLocalesCount);
router.post("/locales", _localesController.saveLocal);
router.get("/locales/:id", _localesController.getLocal);
router["delete"]("/locales/:id", _localesController.deleteLocal);
router.put("/locales/:id", _localesController.updateLocal);
var _default = router;
exports["default"] = _default;