"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 4000;

_app["default"].get("/", function (req, res) {
  res.send("Hello World!");
});

_app["default"].listen(port, function () {
  console.log("App listening at http://localhost:".concat(port));
});